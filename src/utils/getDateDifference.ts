export const getDateDifference = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  
  const differenceDate = startDate.getTime() - endDate.getTime();

  return Math.abs(differenceDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
};
