export const generateYearsRange = (startYear, count) => {
  const rangeYears = [];

  for (let i = startYear; i < startYear + count; i++) {
    rangeYears.push(i);
  }
  return rangeYears;
};
