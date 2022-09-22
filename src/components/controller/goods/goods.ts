import './goods.css';
import '../../styles/header.css';
import { Products, StrArray, StrOrNum } from '../../variables/types';
import LocalStorageCards from '../utilities/localStorageCards';
import { areaGoods } from '../../variables/variables';
import changeTextButton from './textButton';

class Goods {
  backet: LocalStorageCards;

  constructor() {
    this.backet = new LocalStorageCards();
  }

  showGoods(data: Products[]): HTMLDivElement {
    const productStore: StrArray = this.backet.getLocalStorage(this.backet.name);
    const backetValue: Partial<StrOrNum> = this.backet.getLocalBacket();
    const basket = document.querySelector('.header__bascket__count') as HTMLSpanElement;
    basket.textContent = backetValue as string;

    data.forEach((el: Products): void => {
      const btnText = changeTextButton(productStore, el.id);

      const card = document.createElement('div') as HTMLDivElement;
      card.classList.add('card');
      card.setAttribute('data-id', `${el.id}`);
      card.setAttribute('data-amount', `${el.amount}`);
      card.setAttribute('data-year', `${el.year}`);
      card.setAttribute('data-brand', `${el.brand}`);
      card.setAttribute('data-color', `${el.color}`);
      card.setAttribute('data-camera', `${el.camera}`);
      card.setAttribute('data-popular', `${el.popular ? 'Да' : 'Нет'}`);
      card.setAttribute('data-alphabet', `${el.name[0]}`);
      const cardTitle = document.createElement('h1') as HTMLDivElement;
      cardTitle.classList.add('card__title');
      cardTitle.textContent = el.name;
      card.appendChild(cardTitle);
      const cardImg = document.createElement('div') as HTMLDivElement;
      cardImg.classList.add('card__img');
      const img = document.createElement('div') as HTMLDivElement;
      img.classList.add('card__img__picture');
      img.style.backgroundImage = `url(./img/${el.urlImg})`;
      cardImg.appendChild(img);
      card.appendChild(cardImg);
      const amount = document.createElement('p') as HTMLDivElement;
      amount.classList.add('card__amount');
      amount.textContent = `Количество: ${el.amount}`;
      card.appendChild(amount);
      const year = document.createElement('p') as HTMLDivElement;
      year.classList.add('card__year');
      year.textContent = `Год выхода: ${el.year}`;
      card.appendChild(year);
      const brand = document.createElement('p') as HTMLDivElement;
      brand.classList.add('card__brand');
      brand.textContent = `Производитель: ${el.brand}`;
      card.appendChild(brand);
      const colour = document.createElement('p') as HTMLDivElement;
      colour.classList.add('card__colour');
      colour.textContent = `Цвет: ${el.color}`;
      card.appendChild(colour);
      const camera = document.createElement('p') as HTMLDivElement;
      camera.classList.add('card__camera');
      camera.textContent = `Количество камер: ${el.camera}`;
      card.appendChild(camera);
      const popular = document.createElement('p') as HTMLDivElement;
      popular.classList.add('card__popular');
      popular.textContent = `Популярный: ${el.popular ? 'Да' : 'Нет'}`;
      card.appendChild(popular);
      const btn = document.createElement('button') as HTMLButtonElement;
      btn.classList.add('card__btn');
      btn.textContent = `${btnText}`;
      if (btn.textContent === 'Удалить из корзины') {
        btn.classList.add('card__btn_active');
      }
      card.appendChild(btn);
      areaGoods.appendChild(card);
    });

    return areaGoods;
  }
}

export default Goods;
