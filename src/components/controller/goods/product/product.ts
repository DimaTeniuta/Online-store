import { Products } from '../../../variables/types';

class Product {
  private product: Products[];

  constructor(products: Products[]) {
    this.product = products;
  }

  getProduct(): Products[] {
    return this.product;
  }
}

export default Product;
