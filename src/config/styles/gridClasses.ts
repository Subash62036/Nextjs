export const gridClasses = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
};

export const DynamicGridCols = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
};

export const getDynamicGridCols = (numElements: number):string => {
  if (numElements % 6 === 0) {
    return DynamicGridCols[6];
  }
  if (numElements % 5 === 0) {
    return DynamicGridCols[5];
  }
  if (numElements % 4 === 0) {
    return DynamicGridCols[4];
  }
  if (numElements % 3 === 0) {
    return DynamicGridCols[3];
  }
  if (numElements % 2 === 0) {
    return DynamicGridCols[2];
  }
  return DynamicGridCols[1];
};
