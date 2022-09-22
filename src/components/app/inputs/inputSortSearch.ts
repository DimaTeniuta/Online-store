import LocalStorageInput from '../../controller/utilities/localStorageInput';
import { StrArray } from '../../variables/types';
import { btnInputClear, inputSearch } from '../../variables/variables';

class InputSearch {
  input: LocalStorageInput;

  constructor() {
    this.input = new LocalStorageInput();
  }

  showBtnClear(): void {
    inputSearch.addEventListener('input', (): void => {
      if (inputSearch.value !== '') {
        inputSearch.classList.add('active');
        btnInputClear.classList.add('active');
      } else {
        inputSearch.classList.remove('active');
        btnInputClear.classList.remove('active');
      }
    });

    this.clearInputSearch(inputSearch, btnInputClear);
  }

  clearInputSearch(inp: HTMLInputElement, btn: HTMLDivElement): void {
    btn.addEventListener('click', (): void => {
      const cards = document.querySelectorAll('.card') as NodeListOf<Element>;

      cards.forEach((el: Element): void => {
        el.classList.remove('hide-search');
      });

      inp.value = '';
      inp.classList.remove('active');
      btn.classList.remove('active');
      this.input.setLocalStorage(inp.value);
    });
  }

  filterInputSearch(): void {
    inputSearch.addEventListener('input', (): void => {
      const cards = document.querySelectorAll('.card') as NodeListOf<Element>;
      this.input.setLocalStorage(inputSearch.value);

      cards.forEach((el: Element): void => {
        const str = el.firstChild?.textContent?.toLowerCase() as string;
        const substr = inputSearch.value.toLowerCase() as string;

        el.classList.remove('hide-search');
        if (!str.includes(substr)) {
          el.classList.add('hide-search');
        }
      });
    });
  }

  filterInputSearchUnload(): void {
    const cards = document.querySelectorAll('.card') as NodeListOf<Element>;
    cards.forEach((el: Element) => {
      const substr = this.input.getLocalStorage(this.input.name) as StrArray;
      const str = el.firstChild?.textContent?.toLowerCase() as string;

      if (substr[0]) {
        inputSearch.value = substr[0];
        el.classList.remove('hide-search');
        inputSearch.classList.add('active');
        btnInputClear.classList.add('active');
      }

      if (substr[0] && !str.includes(substr[0])) {
        el.classList.add('hide-search');
      }
    });
  }
}

export default InputSearch;
