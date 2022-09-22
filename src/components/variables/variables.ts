import * as noUiSlider from 'nouislider';
import LocalStorageFilterValue from '../controller/utilities/localStorageFiltersValue';
import LocalStorageSlider from '../controller/utilities/localStorageSlider';
import { NumArray, StrArray } from './types';

// sliders
export const sliderCount = document.querySelector('.filter-range__slider-count__slider') as noUiSlider.target;
export const sliderCountMin = document.querySelector('.filter-range__slider-count__mim') as HTMLDivElement;
export const sliderCountMax = document.querySelector('.filter-range__slider-count__max') as HTMLDivElement;
export const sliderYear = document.querySelector('.filter-range__slider-year__slider') as noUiSlider.target;
export const sliderYearMin = document.querySelector('.filter-range__slider-year__mim') as HTMLDivElement;
export const sliderYearMax = document.querySelector('.filter-range__slider-year__max') as HTMLDivElement;
export const arrLocalSlider1: NumArray = [];
export const arrLocalSlider2: NumArray = [];
const localClassSlider: LocalStorageSlider = new LocalStorageSlider();
export const localSlider1: StrArray = localClassSlider.getLocalStorage(localClassSlider.name);
export const localSlider2: StrArray = localClassSlider.getLocalStorage(localClassSlider.name2);

// goods
export const areaGoods = document.querySelector('.main__container-product') as HTMLDivElement;

// filter value
export const areaBtnsFilterValue = document.querySelector('.filter-value') as HTMLDivElement;
export const btnsFilterValue = document.querySelectorAll('.btn') as NodeListOf<Element>;

// filter search
export const inputSearch = document.querySelector('.filter-sort__input') as HTMLInputElement;
export const btnInputClear = document.querySelector('.filter-sort__input__clear') as HTMLDivElement;

// select
export const selectSearch = document.querySelector('.filter-sort__select') as HTMLSelectElement;

// MainArry
const valueMainArray = new LocalStorageFilterValue();
export const mainArray: StrArray = valueMainArray.getLocalStorage(valueMainArray.name);

// btns reset
export const btnResetFilters = document.querySelector('.filter-sort__reset__btn_filter') as HTMLButtonElement;
export const btnResetLocalStorage = document.querySelector('.filter-sort__reset__btn_setting') as HTMLButtonElement;

//no result
export const messageNoResult = document.querySelector('.main__container-message') as HTMLDivElement;

// basket full
export const messageBasket = document.querySelector('.main__container-message-basket') as HTMLDivElement;
export const overlay = document.querySelector('.overlay') as HTMLDivElement;
export const btnMessageBasket = document.querySelector('.main__container-message-basket__btn') as HTMLDivElement;
