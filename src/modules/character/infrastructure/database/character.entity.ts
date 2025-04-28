import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BaseEntity } from 'src/modules/shared/infrastructure/database/base.entity';

export type CharacterDocument = CharacterEnitity & Document;

@Schema({ _id: false })
export class EmbeddedStatus {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true, enum: ['active', 'inactive'] })
  status: 'active' | 'inactive';
}

@Schema({ _id: false })
export class CharacterStats {
  @Prop({ default: 10 }) strength: number;
  @Prop({ default: 10 }) dexterity: number;
  @Prop({ default: 10 }) constitution: number;
  @Prop({ default: 10 }) intelligence: number;
  @Prop({ default: 10 }) wisdom: number;
  @Prop({ default: 10 }) charisma: number;
}

@Schema()
export class CharacterEnitity extends BaseEntity {
  @Prop({ unique: true, index: true })
  _id: Types.ObjectId

  @Prop({ required: true })
  name: string;

  @Prop({ default: 1 })
  level: number;

  @Prop({ default: 0 })
  experience: number;

  @Prop({ type: CharacterStats, required: true })
  stats: CharacterStats;

  @Prop({ type: [EmbeddedStatus], required: true })
  races: EmbeddedStatus[];

  @Prop({ type: [EmbeddedStatus], required: true })
  classes: EmbeddedStatus[];

  @Prop({ type: [String], default: [] })
  unlockedSkills: string[];
}

export const CharacterSchema = SchemaFactory.createForClass(CharacterEnitity);