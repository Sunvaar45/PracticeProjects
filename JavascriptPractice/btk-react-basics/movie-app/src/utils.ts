// takes nunber[], returns number
export const getAverage = (array: number[]): number =>
  array.length > 0
    ? array.reduce((sum, value) => sum + value, 0) / array.length
    : 0;
