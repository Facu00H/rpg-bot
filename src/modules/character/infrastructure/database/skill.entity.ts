import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntity } from 'src/modules/shared/infrastructure/database/base.entity';

export type SkillDocument = Skill & Document;

@Schema()
export class Skill extends BaseEntity {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: 1 })
  requiredLevel: number;

  @Prop({ required: false })
  classRestriction?: string;

  @Prop({ required: false })
  raceRestriction?: string;

  @Prop({ type: Object, required: false })
  effects?: any;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
