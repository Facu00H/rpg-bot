import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntity } from 'src/modules/shared/infrastructure/database/base.entity';

export type CharacterClassDocument = CharacterClass & Document;

@Schema()
export class CharacterClass extends BaseEntity {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;
  
  @Prop({ required: true })
  hitDie: number;

  @Prop({ required: true })
  primaryStat: string;
  
  @Prop({ type: [String], default: [] })
  abilities: string[];
}

export const CharacterClassSchema = SchemaFactory.createForClass(CharacterClass);