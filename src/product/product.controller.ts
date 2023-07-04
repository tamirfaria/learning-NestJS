import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { CreateProductDTO } from './dto/createProduct.dto';
import { ProductRepository } from './product.repository';

@Controller('/product')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @ApiTags('Registrar novo produto')
  @Post()
  async createProducts(@Body() productParams: CreateProductDTO) {
    const parseParams = { ...productParams, id: randomUUID() };
    this.productRepository.saveProduct(parseParams);

    return {
      message: 'Product created successfuly.',
      product: productParams,
    };
  }

  @ApiTags('Listar produtos')
  @Get()
  async getProducts() {
    return this.productRepository.getProducts();
  }
}
