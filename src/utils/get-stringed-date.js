export const getStringedDate = (targetDate) => {
  let year = new Date(targetDate).getFullYear();
  let month = new Date(targetDate).getMonth() + 1;
  let day = new Date(targetDate).getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
};
