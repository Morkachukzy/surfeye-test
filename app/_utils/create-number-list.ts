export const createNumberList = (
  start: number,
  end: number,
  increment: number
) => {
  const length = Math.floor((end - start) / increment) + 1;

  return Array.from({ length }, (_, i) => start + i * increment);
};
