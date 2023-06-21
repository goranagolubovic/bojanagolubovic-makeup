export const formatDate = (date) => {
  const [year, month, day] = date.split("-");
  const newDate = new Date(year, month - 1, day);
  const formattedDate = `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
  return formattedDate;
};
