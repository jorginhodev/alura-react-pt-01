export default function formatPrice(value) {
  const currencyFormat = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  }).format(value);

  return currencyFormat;
}
