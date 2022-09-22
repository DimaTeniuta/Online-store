import '../../styles/header.css';
import { StrArray, StrOrNum } from '../../variables/types';
import LocalStorage from './localStorage';

class LocalStorageCards extends LocalStorage {
  localBacket: string;

  constructor() {
    super('keyName');
    this.localBacket = 'keyBacket';
  }

  getLocalBacket(): Partial<StrOrNum> {
    const backetLocalStorage: string = localStorage.getItem(this.localBacket) as string;

    if (backetLocalStorage !== null) {
      return JSON.parse(backetLocalStorage);
    } else {
      return 0;
    }
  }

  setLocalStorage(value: string): void {
    const currentValues: StrArray = this.getLocalStorage(this.name);
    const index: number = currentValues.indexOf(value);
    const basket = document.querySelector('.header__bascket__count') as HTMLSpanElement;

    if (index === -1) {
      currentValues.push(value);
      basket.textContent = String(Number(basket.textContent) + 1);
      this.setLocalBacket(basket.textContent);
    } else {
      currentValues.splice(index, 1);
      basket.textContent = String(Number(basket.textContent) - 1);
      this.setLocalBacket(basket.textContent);
    }

    localStorage.setItem(this.name, JSON.stringify(currentValues));
  }

  setLocalBacket(value: string): string {
    localStorage.setItem(this.localBacket, JSON.stringify(value));

    return value;
  }
}

export default LocalStorageCards;
