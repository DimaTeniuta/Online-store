import addMessageCountBasket from '../../controller/message/messageFullBasket';
import Goods from '../../controller/goods/goods';
import Product from '../../controller/goods/product/product';
import LocalStorageFilterValue from '../../controller/utilities/localStorageFiltersValue';
import products from '../../controller/goods/product/products.json';

class Card {
  product: Product;
  goods: Goods;
  filterValue: LocalStorageFilterValue;

  constructor() {
    this.product = new Product(products);
    this.goods = new Goods();
    this.filterValue = new LocalStorageFilterValue();
  }

  drowCards(): void {
    this.addCardsInBacket();
    this.goods.showGoods(this.product.getProduct());
  }

  addCardsInBacket(): void {
    const btn = document.querySelector('.main__container-product') as HTMLDivElement;

    btn.addEventListener('click', (event: MouseEvent): void => {
      if ((event.target as HTMLElement).classList.contains('card__btn')) {
        const basket = document.querySelector('.header__bascket__count') as HTMLSpanElement;
        const count = basket.textContent as string;

        if (+count < 20) {
          (event.target as HTMLElement).classList.toggle('card__btn_active');
          const key = (event.target as HTMLElement).parentElement as HTMLElement;
          const keyValue = key.getAttribute('data-id') as string;
          this.goods.backet.setLocalStorage(keyValue);

          if ((event.target as HTMLElement).classList.contains('card__btn_active')) {
            (event.target as HTMLButtonElement).textContent = 'Удалить из корзины';
          } else {
            (event.target as HTMLButtonElement).textContent = 'Добавить в корзину';
          }
        } else {
          if ((event.target as HTMLElement).classList.contains('card__btn_active')) {
            (event.target as HTMLElement).classList.toggle('card__btn_active');
            const key = (event.target as HTMLElement).parentElement as HTMLElement;
            const keyValue = key.getAttribute('data-id') as string;
            this.goods.backet.setLocalStorage(keyValue);

            if ((event.target as HTMLElement).classList.contains('card__btn_active')) {
              (event.target as HTMLButtonElement).textContent = 'Удалить из корзины';
            } else {
              (event.target as HTMLButtonElement).textContent = 'Добавить в корзину';
            }
          } else {
            addMessageCountBasket();
          }
        }
      }
    });
  }
}

export default Card;
