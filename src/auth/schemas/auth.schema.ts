/*
 *   Copyright (c) 2024 Dilshan Ramesh
 *   All rights reserved.
 */

import mongoose from 'mongoose';
import { User } from '../../user/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Auth {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
