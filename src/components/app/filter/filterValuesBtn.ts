import LocalStorageFilterValue from '../../controller/utilities/localStorageFiltersValue';
import { areaBtnsFilterValue, btnsFilterValue, mainArray } from '../../variables/variables';
import chooseClassName from './chooseClassName';

class FilterVal {
  mainArrLocal: LocalStorageFilterValue;

  constructor() {
    this.mainArrLocal = new LocalStorageFilterValue();
  }

  addClassActive(): void {
    areaBtnsFilterValue.addEventListener('click', (event: MouseEvent): void => {
      const targ = event.target as HTMLElement;

      if (targ.classList.contains('btn')) {
        const value = targ.textContent as string;
        const index = mainArray.indexOf(value) as number;
        targ.classList.toggle('active');

        if (index === -1) {
          mainArray.push(value);
          this.mainArrLocal.setLocalStorage(value);
        } else {
          mainArray.splice(index, 1);
          this.mainArrLocal.delLocalMainArray(value);
        }
      }
    });

    this.filterValClick();
  }

  filterValClick(): void {
    areaBtnsFilterValue.addEventListener('click', (event: MouseEvent): void => {
      const targ = event.target as HTMLElement;

      if (targ.classList.contains('btn')) {
        const arrayCards = document.querySelectorAll('.card') as NodeListOf<Element>;
        const filterValue = targ.textContent as string;
        const tmp = chooseClassName(filterValue);

        if (mainArray.length !== 0) {
          arrayCards.forEach((el: Element): void => {
            const dataName = (el as HTMLElement).dataset[tmp] as string;

            if (tmp === 'brand') {
              el.classList.remove('hide-brand');
              if (mainArray.indexOf(dataName) === -1) {
                el.classList.add('hide-brand');
              }
            } else if (tmp === 'camera') {
              el.classList.remove('hide-camera');
              if (mainArray.indexOf(dataName) === -1) {
                el.classList.add('hide-camera');
              }
            } else if (tmp === 'color') {
              el.classList.remove('hide-color');
              if (mainArray.indexOf(dataName) === -1) {
                el.classList.add('hide-color');
              }
            } else if (tmp === 'popular') {
              el.classList.remove('hide-popular');
              if (mainArray.indexOf(dataName) === -1 && el.children[7].textContent === 'Популярный: Нет') {
                el.classList.add('hide-popular');
              }
            }

            if (
              mainArray.indexOf('Samsung') === -1 &&
              mainArray.indexOf('Apple') === -1 &&
              mainArray.indexOf('Xiaomi') === -1
            ) {
              el.classList.remove('hide-brand');
            }
            if (mainArray.indexOf('1') === -1 && mainArray.indexOf('2') === -1 && mainArray.indexOf('3') === -1) {
              el.classList.remove('hide-camera');
            }
            if (
              mainArray.indexOf('белый') === -1 &&
              mainArray.indexOf('желтый') === -1 &&
              mainArray.indexOf('красный') === -1
            ) {
              el.classList.remove('hide-color');
            }
            if (mainArray.indexOf('pop') === -1) {
              el.classList.remove('hide-popular');
            }
          });
        } else {
          arrayCards.forEach((elem: Element): void => {
            elem.classList.remove('hide-brand');
            elem.classList.remove('hide-camera');
            elem.classList.remove('hide-color');
            elem.classList.remove('hide-popular');
          });
        }
      }
    });
  }

  addActivForReload(): void {
    btnsFilterValue.forEach((el: Element): void => {
      const content = el.textContent as string;

      if (mainArray.includes(content)) {
        el.classList.add('active');
      }
    });
  }

  filterValUnloadPage(): void {
    this.addActivForReload();
    btnsFilterValue.forEach((element: Element): void => {
      if (element.classList.contains('active')) {
        const filterValue = element.textContent as string;
        const arrayCards = document.querySelectorAll('.card') as NodeListOf<Element>;
        const tmp = chooseClassName(filterValue);

        if (mainArray.length !== 0) {
          const arrayCards = document.querySelectorAll('.card') as NodeListOf<Element>;
          arrayCards.forEach((el: Element): void => {
            const dataName = (el as HTMLElement).dataset[tmp] as string;

            if (tmp === 'brand') {
              el.classList.remove('hide-brand');
              if (mainArray.indexOf(dataName) === -1) {
                el.classList.add('hide-brand');
              }
            } else if (tmp === 'camera') {
              el.classList.remove('hide-camera');
              if (mainArray.indexOf(dataName) === -1) {
                el.classList.add('hide-camera');
              }
            } else if (tmp === 'color') {
              el.classList.remove('hide-color');
              if (mainArray.indexOf(dataName) === -1) {
                el.classList.add('hide-color');
              }
            } else if (tmp === 'popular') {
              el.classList.remove('hide-popular');
              if (mainArray.indexOf(dataName) === -1 && el.children[7].textContent === 'Популярный: Нет') {
                el.classList.add('hide-popular');
              }
            }

            if (
              mainArray.indexOf('Samsung') === -1 &&
              mainArray.indexOf('Apple') === -1 &&
              mainArray.indexOf('Xiaomi') === -1
            ) {
              el.classList.remove('hide-brand');
            }
            if (mainArray.indexOf('1') === -1 && mainArray.indexOf('2') === -1 && mainArray.indexOf('3') === -1) {
              el.classList.remove('hide-camera');
            }
            if (
              mainArray.indexOf('белый') === -1 &&
              mainArray.indexOf('желтый') === -1 &&
              mainArray.indexOf('красный') === -1
            ) {
              el.classList.remove('hide-color');
            }
            if (mainArray.indexOf('pop') === -1) {
              el.classList.remove('hide-popular');
            }
          });
        } else {
          arrayCards.forEach((elem: Element): void => {
            elem.classList.remove('hide-brand');
            elem.classList.remove('hide-camera');
            elem.classList.remove('hide-color');
            elem.classList.remove('hide-popular');
          });
        }
      }
    });
  }
}

export default FilterVal;
