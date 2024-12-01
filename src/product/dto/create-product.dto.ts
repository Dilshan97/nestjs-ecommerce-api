/*
 *   Copyright (c) 2024 Dilshan Ramesh
 *   All rights reserved.
 */
import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  category: string;
}
