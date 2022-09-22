import { StrArray } from '../../variables/types';

class LocalStorage {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getLocalStorage(value: string): StrArray {
    const keyLocalStorage: string = <string>localStorage.getItem(value);

    if (keyLocalStorage !== null) {
      return JSON.parse(keyLocalStorage);
    } else {
      return [];
    }
  }

  setLocalStorage(value: string): void {
    const currentValues: StrArray = this.getLocalStorage(this.name);
    currentValues.length = 0;
    currentValues.push(value);

    localStorage.setItem(this.name, JSON.stringify(currentValues));
  }
}

export default LocalStorage;
