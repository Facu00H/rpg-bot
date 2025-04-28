import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';
import { BaseRepository as IBaseRepository } from '../../domain/interfaces/base-repository.interface';

// T = Dominio
// D = Documento Mongoose
export class BaseRepository<T, D> implements IBaseRepository<T, D & Document> {
  constructor(protected readonly model: Model<D>) {}

  async create(entity: T): Promise<T> {
    const doc = new this.model(this.toDocument(entity));
    const saved = await doc.save();
    return this.toDomain(saved.toObject());
  }

  async findById(id: string): Promise<T | null> {
    const doc = await this.model.findById(id);
    return doc ? this.toDomain(doc) : null;
  }

  async findAll(filter: FilterQuery<T> = {}): Promise<T[]> {
    const docs = await this.model.find(filter);
    return docs.map(this.toDomain);
  }

  async update(id: string, entity: UpdateQuery<T>): Promise<T | null> {
    const doc = await this.model.findByIdAndUpdate(id, { $set: entity }, { new: true });
    return doc ? this.toDomain(doc) : null;
  }

  async delete(id: string): Promise<boolean> {
    const res = await this.model.findByIdAndDelete(id);
    return !!res;
  }

  // Métodos abstractos: deben implementarse en clases hijas
  toDomain(document: D): T {
    throw new Error('toDomain() must be implemented in subclass');
  }

  toDocument(entity: T): D {
    throw new Error('toDocument() must be implemented in subclass');
  }
}