import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/createProduct.dto';

@Injectable()
export class ProductRepository {
  private products = [];

  async saveProduct(product: CreateProductDTO) {
    this.products.push(product);
  }

  async getProducts() {
    return {
      products: this.products,
    };
  }
}
