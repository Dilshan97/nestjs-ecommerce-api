/*
 *   Copyright (c) 2024 Dilshan Ramesh
 *   All rights reserved.
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import mongoose, { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async createProduct(product: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(product);
    return await createdProduct.save();
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async getProductById(id: string | mongoose.Types.ObjectId): Promise<Product> {
    return await this.productModel.findById(id).exec();
  }

  async updateProduct(
    id: string | mongoose.Types.ObjectId,
    product: Product,
  ): Promise<Product> {
    return await this.productModel
      .findByIdAndUpdate(id, product, { new: true })
      .exec();
  }

  async deleteProduct(id: string | mongoose.Types.ObjectId): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id).exec();
  }
}
