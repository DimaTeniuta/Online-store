function chooseClassName(value: string): string {
  let dataSet = '' as string;

  if (value === 'Samsung' || value === 'Apple' || value === 'Xiaomi') {
    dataSet = 'brand';
  } else if (value === '1' || value === '2' || value === '3') {
    dataSet = 'camera';
  } else if (value === 'белый' || value === 'желтый' || value === 'красный') {
    dataSet = 'color';
  } else if (value === 'pop') {
    dataSet = 'popular';
  }

  return dataSet as string;
}

export default chooseClassName;
