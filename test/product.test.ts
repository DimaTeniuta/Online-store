import Product from '../src/components/controller/goods/product/product';
import { Products } from '../src/components/variables/types';

describe('Product:', (): void => {
  const arrProduct: Products[] = [
    {
      id: 'id-1',
      name: 'test',
      amount: 5,
      year: 2022,
      brand: 'jest',
      color: 'yellow',
      camera: 2,
      popular: true,
      urlImg: 'jest.com',
    },
  ];
  const product: Product = new Product(arrProduct);

  test('should be defined', (): void => {
    expect(product.getProduct()).toBeDefined;
    expect(product.getProduct()).not.toBeUndefined;
  });

  test('should return array as Product', (): void => {
    expect(product.getProduct()).toEqual(arrProduct);
  });
});
