export const directionSort = (column, type) => {
  if (type === 'up') {
    return (a, b) => a[column] - b[column];
  } else if (type === 'down') {
    return (a, b) => b[column] - a[column];
  }
};
