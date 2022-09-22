export interface Products {
  id: string;
  name: string;
  amount: number;
  year: number;
  brand: string;
  color: string;
  camera: number;
  popular: boolean;
  urlImg: string;
}

export type LocalValue = {
  currentValues: string[];
  isNewValue: boolean;
};

export type StrOrNum = string | number;
export type StrArray = string[];
export type NumArray = number[];
