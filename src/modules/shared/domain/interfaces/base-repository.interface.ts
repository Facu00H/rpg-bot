export interface BaseRepository<T, D = any> {
  // CRUD
  create(entity: T): Promise<T>;
  findById(id: string): Promise<T | null>;
  findAll(filter?: Partial<T>): Promise<T[]>;
  update(id: string, entity: Partial<T>): Promise<T | null>;
  delete(id: string): Promise<boolean>;

  // Mapeos entre entidad de dominio y documento Mongoose
  toDomain(document: D): T;
  toDocument(entity: T): D;
}