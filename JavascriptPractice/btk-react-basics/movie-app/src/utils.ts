// takes nunber[], returns number
export const getAverage = (array: number[]): number =>
  array.reduce((sum, value) => sum + value, 0) / array.length;
