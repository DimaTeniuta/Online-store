/**
 * @jest-environment jsdom
 */
import InputSearch from '../src/components/app/inputs/inputSortSearch';

describe('InputSearch:', (): void => {
  const filter: InputSearch = new InputSearch();

  it('clearInputSearch: should be defined', (): void => {
    expect(filter.clearInputSearch).toBeDefined;
    expect(filter.clearInputSearch).not.toBeUndefined;
  });

  it('filterInputSearch: should be defined', (): void => {
    expect(filter.filterInputSearch).toBeDefined;
    expect(filter.filterInputSearch).not.toBeUndefined;
  });

  it('filterInputSearchUnload: should be defined', (): void => {
    expect(filter.filterInputSearchUnload).toBeDefined;
    expect(filter.filterInputSearchUnload).not.toBeUndefined;
  });

  it('showBtnClear: should be defined', (): void => {
    expect(filter.showBtnClear).toBeDefined;
    expect(filter.showBtnClear).not.toBeUndefined;
  });
});
