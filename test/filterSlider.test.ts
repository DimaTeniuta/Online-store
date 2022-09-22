/**
 * @jest-environment jsdom
 */
import FilterSlider from '../src/components/app/filter/filterSlider';

describe('FilterVal:', (): void => {
  const filter: FilterSlider = new FilterSlider();

  it('localSlider: should be defined', (): void => {
    expect(filter.localSlider).toBeDefined;
    expect(filter.localSlider).not.toBeUndefined;
  });

  it('sortSliderCardsForUnload: should be defined', (): void => {
    expect(filter.sortSliderCardsForUnload).toBeDefined;
    expect(filter.sortSliderCardsForUnload).not.toBeUndefined;
  });

  it('sortSliderCardsForWork: should be defined', (): void => {
    expect(filter.sortSliderCardsForWork).toBeDefined;
    expect(filter.sortSliderCardsForWork).not.toBeUndefined;
  });
});
