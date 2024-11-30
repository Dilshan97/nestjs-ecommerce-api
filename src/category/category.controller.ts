import { Controller, Get, Post } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  constructor() {}

  @Get('/')
  getAllCategories() {
    // Implement logic to fetch all categories from your database
    return 'All Categories';
  }

  @Post('/')
  createCategory() {
    // Implement logic to create a new category in your database
    return 'Category created successfully';
  }
}
