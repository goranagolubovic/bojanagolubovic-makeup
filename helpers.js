export const formatDate = (date) => {
  const [year, month, day] = date.split("-");
  const newDate = new Date(year, month - 1, day);
  const formattedDate = `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
  return formattedDate;
};

export const convertPriceToEuro = (price) => {
  const exchangeRate = 0.51;
  const formattedPrice = price.split(" ")[0];
  const priceInEuro = parseFloat(formattedPrice) * exchangeRate;
  return priceInEuro;
};

export const filterGiftCards = (giftCards) => {
  const filteredGiftCards = giftCards.filter((elem) => !elem.isUsed);
  return filteredGiftCards;
};

export const filterReservations = (reservations, filter) => {
  const today = new Date();
  const value =
    filter === "today" || filter === "all"
      ? today
      : new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  const valueDate = value.toLocaleDateString("fr-CA");
  const filteredReservations =
    filter === "all"
      ? activeReservations(reservations, valueDate)
      : reservationsForDate(reservations, valueDate);
  return filteredReservations;
};

const reservationsForDate = (reservations, valueDate) => {
  return reservations.filter((elem) => elem.hasOwnProperty(valueDate));
};
const activeReservations = (reservations, today) => {
  return reservations.filter((elem) => {
    const date = Object.keys(elem).find((key) =>
      key.match(/^\d{4}-\d{2}-\d{2}$/)
    );
    if (date >= today) {
      return true;
    }
    return false;
  });
};
