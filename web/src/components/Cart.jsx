const intl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function Cart({ checkout, cart }) {
  let total = 0;
  cart.forEach((current) => {
    total += current.pizza.sizes[current.size];
  });

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="size">{item.size} - </span>
            <span className="type">{item.pizza.name} - </span>
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {intl.format(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
