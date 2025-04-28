import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntity } from 'src/modules/shared/infrastructure/database/base.entity';

export type RaceDocument = Race & Document;

@Schema({ _id: false })
export class StatBonuses {
  @Prop({ default: 0 }) strength: number;
  @Prop({ default: 0 }) dexterity: number;
  @Prop({ default: 0 }) constitution: number;
  @Prop({ default: 0 }) intelligence: number;
  @Prop({ default: 0 }) wisdom: number;
  @Prop({ default: 0 }) charisma: number;
}

@Schema()
export class Race extends BaseEntity {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: StatBonuses, required: true })
  statBonuses: StatBonuses;
  
  @Prop({ type: [String], default: [] })
  skills: string[];
}

export const RaceSchema = SchemaFactory.createForClass(Race);