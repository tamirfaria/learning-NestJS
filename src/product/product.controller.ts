import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';

interface ProductParams {
  id: string;
  name: string;
  price: string;
  quantity: number;
  description: string;
  feature: { name: string; description: string }[];
  images: { url: string; description: string }[];
  category: string;
  creationDate: string;
  updateDate: string;
}

@Controller('/product')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProducts(@Body() productParams: ProductParams) {
    this.productRepository.saveProduct(productParams);

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
