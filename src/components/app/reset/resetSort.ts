import { btnResetLocalStorage } from '../../variables/variables';

function resetSort(): void {
  btnResetLocalStorage.addEventListener('click', (): void => {
    localStorage.clear();
    window.location.reload();
  });
}

export default resetSort;
