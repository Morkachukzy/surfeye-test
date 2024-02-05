export const createNumberList = (
  start: number,
  end: number,
  increment: number
) => {
  const length = Math.floor((end - start) / increment) + 1;

  const decimalSegment = increment.toString().split('.')[1];
  let precision = 0;
  if (decimalSegment) {
    precision = decimalSegment.length;
  }

  return Array.from({ length }, (_, i) => {
    const digit = start + i * increment;
    return Number(digit.toFixed(precision));
  });
};
