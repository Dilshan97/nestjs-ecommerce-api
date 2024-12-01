import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/')
  getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Post('/')
  createProduct(@Body() sanitizedInputs: CreateProductDto) {
    return this.productService.createProduct(sanitizedInputs);
  }
}
