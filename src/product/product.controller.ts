import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProductDTO } from './dto/createProduct.dto';
import { ProductRepository } from './product.repository';

@Controller('/product')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProducts(@Body() productParams: CreateProductDTO) {
    const parseParams = { ...productParams, id: randomUUID() };
    this.productRepository.saveProduct(parseParams);

    return {
      message: 'Product created successfuly.',
      product: productParams,
    };
  }

  @Get()
  async getProducts() {
    return this.productRepository.getProducts();
  }
}
