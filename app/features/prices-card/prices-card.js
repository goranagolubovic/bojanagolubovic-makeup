const PricesCard = ({
  prices,
  containerStyle,
  itemStyle,
  title,
  titleStyle,
}) => {
  return (
    <div className={containerStyle}>
      <p className={titleStyle}>{title}</p>
      {prices.map((elem) => {
        return (
          <div className={itemStyle}>
            <p>{elem.title}</p>
            <p>{elem.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PricesCard;
