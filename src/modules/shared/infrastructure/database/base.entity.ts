import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BaseDocument = HydratedDocument<BaseEntity>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class BaseEntity {
  @Prop({ required: true, default: () => new Date() })
  createdAt: Date;

  @Prop({ required: true, default: () => new Date() })
  updatedAt: Date;
}
