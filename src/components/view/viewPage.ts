import Slider from '../app/inputs/sliderValue';
import Card from './cards/viewCards';
import InputSearch from '../app/inputs/inputSortSearch';
import {
  arrLocalSlider1,
  arrLocalSlider2,
  localSlider1,
  localSlider2,
  sliderCount,
  sliderCountMax,
  sliderCountMin,
  sliderYear,
  sliderYearMax,
  sliderYearMin,
} from '../variables/variables';
import FilterVal from '../app/filter/filterValuesBtn';
import FilterSlider from '../app/filter/filterSlider';
import LocalStorageSlider from '../controller/utilities/localStorageSlider';
import * as noUiSlider from 'nouislider';
import Select from '../app/inputs/selectFilter';
import resetFilters from '../app/reset/resetFilter';
import resetSort from '../app/reset/resetSort';
import checkGoods from '../controller/message/messageSearch';
import { removeMessageCountBasket } from '../controller/message/messageFullBasket';

class Page {
  input: Slider;
  view: Card;
  inpSearch: InputSearch;
  filterVal: FilterVal;
  filterSlider: FilterSlider;
  localSlider: LocalStorageSlider;
  select: Select;

  constructor() {
    this.input = new Slider();
    this.view = new Card();
    this.inpSearch = new InputSearch();
    this.filterVal = new FilterVal();
    this.filterSlider = new FilterSlider();
    this.localSlider = new LocalStorageSlider();
    this.select = new Select();
  }

  viewPage() {
    document.addEventListener('DOMContentLoaded', (): void => {
      this.view.drowCards();
      this.drowSliders(localSlider1, sliderCount, '.filter-range__slider-count__slider', 1, 12);
      this.drowSliders(localSlider2, sliderYear, '.filter-range__slider-year__slider', 2000, 2022);
      this.changeValueInDIvUseSlider();
      this.filterVal.filterValUnloadPage();
      this.filterSlider.sortSliderCardsForUnload();
      this.inpSearch.filterInputSearchUnload();
      this.select.sortSelectGoodsUnload();
    });
  }

  workPage(): void {
    this.inpSearch.showBtnClear();
    this.inpSearch.filterInputSearch();
    this.filterVal.addClassActive();
    this.select.sortSelectGoods();
    resetFilters();
    resetSort();
    checkGoods();
    removeMessageCountBasket();
  }

  drowSliders(sliderLocal: string[], slider: noUiSlider.target, sliderClass: string, min: number, max: number): void {
    if (sliderLocal.length !== 0) {
      this.input.createSlider(slider, +sliderLocal[0], +sliderLocal[1], min, max);
      const slider1 = document.querySelector(sliderClass) as noUiSlider.target;
      slider1.noUiSlider?.set([+sliderLocal[0], +sliderLocal[1]]);
    } else {
      this.input.createSlider(slider, min, max, min, max);
    }
  }

  changeValueInDIvUseSlider(): void {
    this.input.updateValue(sliderCount, sliderCountMin, sliderCountMax);
    this.input.updateValue(sliderYear, sliderYearMin, sliderYearMax);
    this.input.getEndValue(sliderCount, arrLocalSlider1);
    this.input.getEndValue(sliderYear, arrLocalSlider2);
    this.filterSlider.sortSliderCardsForWork(sliderCount, 'data-amount', 'hide-amount');
    this.filterSlider.sortSliderCardsForWork(sliderYear, 'data-year', 'hide-year');
  }
}

export default Page;
