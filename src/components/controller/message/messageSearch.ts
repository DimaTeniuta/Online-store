import { messageNoResult } from '../../variables/variables';

function checkGoods(): void {
  window.addEventListener('click', (): void => {
    ShowMessage();
  });

  window.addEventListener('touchstart', (): void => {
    ShowMessage();
  });

  window.addEventListener('touchend', (): void => {
    ShowMessage();
  });

  window.addEventListener('touchmove', (): void => {
    ShowMessage();
  });

  window.addEventListener('keyup', (): void => {
    ShowMessage();
  });

  window.addEventListener('load', (): void => {
    ShowMessage();
  });
}

export function ShowMessage(): void {
  const cards = document.querySelectorAll('.card') as NodeListOf<Element>;

  let count = 0 as number;
  cards.forEach((el: Element): void => {
    if (
      el.classList.contains('hide-amount') ||
      el.classList.contains('hide-brand') ||
      el.classList.contains('hide-camera') ||
      el.classList.contains('hide-color') ||
      el.classList.contains('hide-popular') ||
      el.classList.contains('hide-year') ||
      el.classList.contains('hide-search')
    ) {
      count++;
    }
  });

  if (cards.length === count) {
    messageNoResult.classList.remove('show');
  } else {
    messageNoResult.classList.add('show');
  }
}

export default checkGoods;
