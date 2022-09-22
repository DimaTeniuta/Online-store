/**
 * @jest-environment jsdom
 */

import Select from '../src/components/app/inputs/selectFilter';

describe('Select:', (): void => {
  const input: Select = new Select();

  it('chooseSelectDown: should be defined', (): void => {
    expect(input.chooseSelectDown).toBeDefined;
    expect(input.chooseSelectDown).not.toBeUndefined;
  });

  it('chooseSelectDownLetter: should be defined', (): void => {
    expect(input.chooseSelectDownLetter).toBeDefined;
    expect(input.chooseSelectDownLetter).not.toBeUndefined;
  });

  it('chooseSelectUp: should be defined', (): void => {
    expect(input.chooseSelectUp).toBeDefined;
    expect(input.chooseSelectUp).not.toBeUndefined;
  });

  it('chooseSelectUpLetter: should be defined', (): void => {
    expect(input.chooseSelectUpLetter).toBeDefined;
    expect(input.chooseSelectUpLetter).not.toBeUndefined;
  });

  it('insertAfter: should be defined', (): void => {
    expect(input.insertAfter).toBeDefined;
    expect(input.insertAfter).not.toBeUndefined;
  });

  it('sortSelectGoods: should be defined', (): void => {
    expect(input.sortSelectGoods).toBeDefined;
    expect(input.sortSelectGoods).not.toBeUndefined;
  });

  it('sortSelectGoodsUnload: should be defined', (): void => {
    expect(input.sortSelectGoodsUnload).toBeDefined;
    expect(input.sortSelectGoodsUnload).not.toBeUndefined;
  });
});
