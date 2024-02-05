const CYCLE = 60;

export const getMinutesAndSeconds = (seconds: number) => {
  const minutes = Math.floor(seconds / CYCLE);
  const remainingSeconds = seconds % CYCLE;

  return { minutes, seconds: remainingSeconds };
};
