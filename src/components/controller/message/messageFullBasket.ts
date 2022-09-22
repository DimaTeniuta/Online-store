import { btnMessageBasket, messageBasket, overlay } from '../../variables/variables';
import '../../styles/messageBasket.css';

function addMessageCountBasket(): void {
  messageBasket.style.display = 'flex' as string;
  overlay.style.display = 'block' as string;
}

export function removeMessageCountBasket(): void {
  listenOverlay();
  listenBtnMessageBasket();
}

export function listenOverlay(): void {
  overlay.addEventListener('click', (): void => {
    messageBasket.style.display = 'none' as string;
    overlay.style.display = 'none' as string;
  });
}

export function listenBtnMessageBasket(): void {
  btnMessageBasket.addEventListener('click', (): void => {
    messageBasket.style.display = 'none' as string;
    overlay.style.display = 'none' as string;
  });
}

export default addMessageCountBasket;
