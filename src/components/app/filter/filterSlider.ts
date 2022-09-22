import LocalStorageSlider from '../../controller/utilities/localStorageSlider';
import { localSlider1, localSlider2 } from '../../variables/variables';
import * as noUiSlider from 'nouislider';

class FilterSlider {
  localSlider: LocalStorageSlider;

  constructor() {
    this.localSlider = new LocalStorageSlider();
  }

  sortSliderCardsForUnload(): void {
    const cards = document.querySelectorAll('.card') as NodeListOf<Element>;

    cards.forEach((el: Element): void => {
      const dataMount: number = +(el.getAttribute('data-amount') as string);
      el.classList.remove('hide-amount');
      if (dataMount < +localSlider1[0] || dataMount > +localSlider1[1]) {
        el.classList.add('hide-amount');
      }

      const dataYear: number = +(el.getAttribute('data-year') as string);
      el.classList.remove('hide-year');
      if (dataYear < +localSlider2[0] || dataYear > +localSlider2[1]) {
        el.classList.add('hide-year');
      }
    });
  }

  sortSliderCardsForWork(slider: noUiSlider.target, dataAtr: string, hideClass: string): void {
    const cards = document.querySelectorAll('.card') as NodeListOf<Element>;
    slider.noUiSlider?.on('change', (values) => {
      cards.forEach((el: Element): void => {
        const dataMount: number = +(el.getAttribute(dataAtr) as string);
        el.classList.remove(hideClass);
        if (dataMount < +values[0] || dataMount > +values[1]) {
          el.classList.add(hideClass);
        }
      });
    });
  }
}

export default FilterSlider;
