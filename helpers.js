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
