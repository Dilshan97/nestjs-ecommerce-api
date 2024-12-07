/*
 *   Copyright (c) 2024 Dilshan Ramesh
 *   All rights reserved.
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, versionKey: false })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: Number, required: true })
  phoneNumber: string;

  @Prop({ type: String, required: true, enum: ['customer', 'admin'] })
  role: string;

  @Prop({ type: Boolean, required: true, default: true })
  status: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
