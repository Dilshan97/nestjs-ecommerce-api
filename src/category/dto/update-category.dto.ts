/*
 *   Copyright (c) 2024 Dilshan Ramesh
 *   All rights reserved.
 */
import { IsBoolean, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  name: string;

  @IsBoolean()
  status: boolean;
}
