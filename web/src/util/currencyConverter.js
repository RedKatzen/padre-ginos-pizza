const intl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function currencyConverter(value) {
  return intl.format(value);
}
