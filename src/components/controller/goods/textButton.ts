import { StrArray } from '../../variables/types';

function changeTextButton(arr: StrArray, el: string): string {
  if (arr.indexOf(el) === -1) {
    return 'Добавить в корзину';
  }

  return 'Удалить из корзины';
}

export default changeTextButton;
