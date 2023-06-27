import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  private products = [];

  async saveProduct(product) {
    this.products.push(product);
  }

  async getProducts() {
    return {
      products: this.products,
    };
  }
}
