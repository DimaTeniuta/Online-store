import {
  btnInputClear,
  btnResetFilters,
  btnsFilterValue,
  inputSearch,
  mainArray,
  sliderCount,
  sliderYear,
} from '../../variables/variables';
import * as noUiSlider from 'nouislider';

function resetFilters(): void {
  btnResetFilters.addEventListener('click', (): void => {
    mainArray.length = 0;
    deleteBtnClasses();
    deleteClassActive();
    resetSlider(sliderCount, 1, 12);
    resetSlider(sliderYear, 2000, 2022);
    resetInputSearch();
  });
}

export function deleteStorage(value: string): void {
  localStorage.removeItem(value);
}

export function deleteClassActive(): void {
  btnsFilterValue.forEach((el: Element): void => {
    el.classList.remove('active');
  });
}

export function deleteBtnClasses(): void {
  const cards = document.querySelectorAll('.card') as NodeListOf<Element>;
  cards.forEach((el: Element): void => {
    el.classList.remove('hide-amount');
    el.classList.remove('hide-brand');
    el.classList.remove('hide-camera');
    el.classList.remove('hide-color');
    el.classList.remove('hide-popular');
    el.classList.remove('hide-year');
    el.classList.remove('hide-search');
  });
  deleteStorage('brand');
}

export function resetSlider(slider: noUiSlider.target, start: number, finish: number): void {
  (slider.noUiSlider as noUiSlider.API).set([start, finish]);
  deleteStorage('slider1');
  deleteStorage('slider2');
}

export function resetInputSearch(): void {
  inputSearch.value = '';
  btnInputClear.classList.remove('active');
  inputSearch.classList.remove('active');
  deleteStorage('search');
}

export default resetFilters;
