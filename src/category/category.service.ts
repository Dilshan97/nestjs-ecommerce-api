/*
 *   Copyright (c) 2024 Dilshan Ramesh
 *   All rights reserved.
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schemas/category.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async createCategory(category: Category): Promise<Category> {
    const createdCategory = new this.categoryModel(category);
    return await createdCategory.save();
  }

  async getAllCategories(): Promise<Category[]> {
    return await this.categoryModel.find().exec();
  }
}
