import * as noUiSlider from 'nouislider';
import LocalStorageSlider from '../../controller/utilities/localStorageSlider';
import { NumArray } from '../../variables/types';
import './nouislider.css';

class Slider {
  updateValue(slider: noUiSlider.target, elStart: HTMLDivElement, elFinish: HTMLDivElement): void {
    (slider.noUiSlider as noUiSlider.API).on('update', (values, handle) => {
      if (handle === 0) {
        elStart.textContent = values[handle] as string;
      } else {
        elFinish.textContent = values[handle] as string;
      }
    });
  }

  getEndValue(slider: noUiSlider.target, array: NumArray) {
    (slider.noUiSlider as noUiSlider.API).on('change', (values) => {
      array.length = 0;
      array.push(values[0] as number);
      array.push(values[1] as number);

      const newSlider: LocalStorageSlider = new LocalStorageSlider();
      if (values[1] > 12) {
        newSlider.setLocalSlider2(values[0] as string);
        newSlider.setLocalSlider2(values[1] as string);
      } else {
        newSlider.setLocalSlider1(values[0] as string);
        newSlider.setLocalSlider1(values[1] as string);
      }
    });
  }

  createSlider(name: noUiSlider.target, first: number, second: number, min: number, max: number): void {
    noUiSlider.create(name, {
      start: [first, second],
      range: {
        min: min,
        max: max,
      },
      connect: true,
      step: 1,
      tooltips: true,
      format: {
        from: function (value: string) {
          return parseInt(value);
        },
        to: function (value: number) {
          return Math.round(Number(value));
        },
      },
    });
  }
}

export default Slider;
