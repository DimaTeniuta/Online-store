import { StrArray } from '../../variables/types';
import LocalStorage from './localStorage';

class LocalStorageFilterValue extends LocalStorage {
  constructor() {
    super('brand');
  }

  setLocalStorage(value: string): void {
    const currentValues: StrArray = this.getLocalStorage(this.name);
    const index: number = currentValues.indexOf(value);

    if (index === -1) {
      currentValues.push(value);
    }

    localStorage.setItem(this.name, JSON.stringify(currentValues));
  }

  delLocalMainArray(value: string): void {
    const currentValues: StrArray = this.getLocalStorage(this.name);
    const index: number = currentValues.indexOf(value);
    currentValues.splice(index, 1);

    localStorage.setItem(this.name, JSON.stringify(currentValues));
  }
}

export default LocalStorageFilterValue;
