export const generateDateRange = (start, end) => {
    const dateRange = [];
    let currentDate = new Date(start);
    const lastDate = new Date(end);
  
    while (currentDate <= lastDate) {
      const date = currentDate.toDateString();
  
      dateRange.push(date);
  
      currentDate.setDate(currentDate.getDate() + 1);
    }
    dateRange.push(end.toDateString());
    return dateRange;
  };