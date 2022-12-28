export const getDatesBetween = (
  startDate: string,
  endDate: string
): string[] => {
  const dates: string[] = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dates.push(currentDate.toISOString().slice(0, 10));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};
