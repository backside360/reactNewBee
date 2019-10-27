export const createSort = (column, type, direct) => {
  if (type === 'number') {
    return (a, b) => (direct ? b[column] - a[column] : a[column] - b[column]);
  } else if (type === 'string') {
    return (a, b) =>
      direct
        ? (a[column] > b[column]) - (a[column] < b[column])
        : (a[column] < b[column]) - (a[column] > b[column]);
  }
};

// direction;
