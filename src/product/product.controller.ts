import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ProductRepository } from './product.repository';

interface ProductParams {
  name: string;
  type: string;
}

@Controller('/product')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProducts(@Body() productParams: ProductParams) {
    const parseParams = {
      ...productParams,
      id: randomUUID(),
      createAt: new Date().toISOString().split('T')[0],
    };

    this.productRepository.saveProduct(parseParams);

    return {
      message: 'Product created successfuly.',
      product: parseParams,
    };
  }

  @Get()
  async getProducts() {
    return this.productRepository.getProducts();
  }
}
