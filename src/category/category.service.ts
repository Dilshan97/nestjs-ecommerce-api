/*
 *   Copyright (c) 2024 Dilshan Ramesh
 *   All rights reserved.
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schemas/category.schema';
import mongoose, { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async createCategory(category: CreateCategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(category);
    return await createdCategory.save();
  }

  async getAllCategories(): Promise<Category[]> {
    return await this.categoryModel.find().exec();
  }

  async getCategory(id: string | mongoose.Types.ObjectId) {
    return await this.categoryModel.findById(id).exec();
  }

  async updateCategory(
    id: string | mongoose.Types.ObjectId,
    category: Category,
  ) {
    return await this.categoryModel
      .findByIdAndUpdate(id, category, { new: true })
      .exec();
  }

  async deleteCategory(id: string | mongoose.Types.ObjectId) {
    return await this.categoryModel.findByIdAndDelete(id).exec();
  }
}
