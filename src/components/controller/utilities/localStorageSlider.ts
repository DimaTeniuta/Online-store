import { StrArray } from '../../variables/types';
import LocalStorage from './localStorage';

class LocalStorageSlider extends LocalStorage {
  name2: string;
  constructor() {
    super('slider1');
    this.name2 = 'slider2';
  }

  setLocalSlider1(value: string): void {
    const currentValues: StrArray = this.getLocalStorage(this.name);
    if (currentValues.length === 2) {
      currentValues.length = 0;
    }
    currentValues.push(value);
    localStorage.setItem(this.name, JSON.stringify(currentValues));
  }

  setLocalSlider2(value: string): void {
    const currentValues: StrArray = this.getLocalStorage(this.name2);
    if (currentValues.length === 2) {
      currentValues.length = 0;
    }
    currentValues.push(value);
    localStorage.setItem(this.name2, JSON.stringify(currentValues));
  }
}
export default LocalStorageSlider;
