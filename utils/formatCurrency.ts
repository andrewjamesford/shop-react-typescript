const formatCurrency = (value: number) => {
  const priceFormat = new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
    currencyDisplay: "symbol",
  });
  const priceFormatted = priceFormat.format(value / 100);

  return priceFormatted;
};

export default formatCurrency;
