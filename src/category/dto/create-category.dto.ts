/*
 *   Copyright (c) 2024 Dilshan Ramesh
 *   All rights reserved.
 */
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;
}
