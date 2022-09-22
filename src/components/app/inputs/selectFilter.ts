import LoacalSelect from '../../controller/utilities/LocalStorageSelect';
import { areaGoods, selectSearch } from '../../variables/variables';

class Select {
  local: LoacalSelect;

  constructor() {
    this.local = new LoacalSelect();
  }

  sortSelectGoodsUnload(): void {
    const localSearch: string = this.local.getLocalStorage(this.local.name)[0];

    if (localSearch) {
      selectSearch.options[+localSearch - 1].selected = true;

      if (localSearch === '1') {
        this.chooseSelectUpLetter(areaGoods, 'data-alphabet');
      } else if (localSearch === '2') {
        this.chooseSelectDownLetter(areaGoods, 'data-alphabet');
      } else if (localSearch === '3') {
        this.chooseSelectUp(areaGoods, 'data-year');
      } else if (localSearch === '4') {
        this.chooseSelectDown(areaGoods, 'data-year');
      } else if (localSearch === '5') {
        this.chooseSelectUp(areaGoods, 'data-amount');
      } else if (localSearch === '6') {
        this.chooseSelectDown(areaGoods, 'data-amount');
      }
    } else {
      this.chooseSelectUpLetter(areaGoods, 'data-alphabet');
      selectSearch.options[0].selected = true;
    }
  }

  sortSelectGoods(): void {
    selectSearch.addEventListener('change', (): void => {
      this.local.setLocalStorage(selectSearch.value);

      if (selectSearch.value === '1') {
        this.chooseSelectUpLetter(areaGoods, 'data-alphabet');
      } else if (selectSearch.value === '2') {
        this.chooseSelectDownLetter(areaGoods, 'data-alphabet');
      } else if (selectSearch.value === '3') {
        this.chooseSelectUp(areaGoods, 'data-year');
      } else if (selectSearch.value === '4') {
        this.chooseSelectDown(areaGoods, 'data-year');
      } else if (selectSearch.value === '5') {
        this.chooseSelectUp(areaGoods, 'data-amount');
      } else if (selectSearch.value === '6') {
        this.chooseSelectDown(areaGoods, 'data-amount');
      }
    });
  }

  chooseSelectUp(parent: HTMLDivElement, dataAtr: string): void {
    for (let i = 0; i < parent.children.length; i++) {
      for (let j = i; j < parent.children.length; j++) {
        if (
          +(parent.children[i].getAttribute(dataAtr) as string) > +(parent.children[j].getAttribute(dataAtr) as string)
        ) {
          const replaceEl: Element = parent.children[i];
          parent.replaceChild(parent.children[j], parent.children[i]);
          this.insertAfter(replaceEl, parent.children[i]);
        }
      }
    }
  }

  chooseSelectUpLetter(parent: HTMLDivElement, dataAtr: string): void {
    for (let i = 0; i < parent.children.length; i++) {
      for (let j = i; j < parent.children.length; j++) {
        if (
          (parent.children[i].getAttribute(dataAtr) as string) > (parent.children[j].getAttribute(dataAtr) as string)
        ) {
          const replaceEl: Element = parent.children[i];
          parent.replaceChild(parent.children[j], parent.children[i]);
          this.insertAfter(replaceEl, parent.children[i]);
        }
      }
    }
  }

  chooseSelectDown(parent: HTMLDivElement, dataAtr: string): void {
    for (let i = 0; i < parent.children.length; i++) {
      for (let j = i; j < parent.children.length; j++) {
        if (
          +(parent.children[i].getAttribute(dataAtr) as string) < +(parent.children[j].getAttribute(dataAtr) as string)
        ) {
          const replaceEl: Element = parent.children[i];
          parent.replaceChild(parent.children[j], parent.children[i]);
          this.insertAfter(replaceEl, parent.children[i]);
        }
      }
    }
  }

  chooseSelectDownLetter(parent: HTMLDivElement, dataAtr: string): void {
    for (let i = 0; i < parent.children.length; i++) {
      for (let j = i; j < parent.children.length; j++) {
        if (
          (parent.children[i].getAttribute(dataAtr) as string) < (parent.children[j].getAttribute(dataAtr) as string)
        ) {
          const replaceEl: Element = parent.children[i];
          parent.replaceChild(parent.children[j], parent.children[i]);
          this.insertAfter(replaceEl, parent.children[i]);
        }
      }
    }
  }

  insertAfter(el: Element, refEl: Node): Element {
    return refEl.parentNode?.insertBefore(el, refEl.nextSibling) as Element;
  }
}

export default Select;
