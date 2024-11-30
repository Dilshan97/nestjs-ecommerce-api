import { Controller, Get, Post } from '@nestjs/common';

@Controller('product')
export class ProductController {
  constructor() {}

  @Get('/')
  getAllProducts() {
    // Implement logic to fetch all products from your database
    return 'All Products';
  }

  @Post('/')
  createProduct() {
    // Implement logic to create a new product in your database
    return 'Product created successfully';
  }
}
