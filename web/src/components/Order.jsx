import { useEffect, useState } from "react";
import Pizza from "./Pizza";
import Cart from "./Cart";
import { useFetch } from "../hooks/useFetch";

// feel free to change en-US / USD to your locale
const intl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function Order() {
  const [pizzaType, setPizzaType] = useState("bbq_ckn");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchedData = useFetch("/api/pizzas");

  let price;
  let selectedPizza = pizzaType;

  if (!loading && pizzaTypes.length > 0) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = intl.format(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
    );
  }

  useEffect(() => {
    if (fetchedData) {
      setPizzaTypes(fetchedData);
      setLoading(false);
    }
  }, [fetchedData]);

  return (
    <div className="order-page">
      <div className="order">
        <h2>Creator Order</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCart([
              ...cart,
              { pizza: selectedPizza, size: pizzaSize, price },
            ]);
          }}
        >
          <div>
            <div>
              <label htmlFor="pizza-type">Pizza Type</label>
              <select
                onChange={(e) => setPizzaType(e.target.value)}
                name="pizza-type"
                value={pizzaType}
              >
                {pizzaTypes.map((pizza) => (
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size">Pizza Size</label>
              <div>
                <span>
                  <input
                    checked={pizzaSize === "S"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                    name="pizza-size"
                    type="radio"
                    value="S"
                    id="pizza-s"
                  />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input
                    checked={pizzaSize === "M"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                    name="pizza-size"
                    type="radio"
                    value="M"
                    id="pizza-m"
                  />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
                <span>
                  <input
                    checked={pizzaSize === "L"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                    name="pizza-size"
                    type="radio"
                    value="L"
                    id="pizza-l"
                  />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
              <button type="submit">Add to Cart</button>
            </div>
          </div>
          {loading ? (
            <h1>LOADING...</h1>
          ) : selectedPizza ? (
            <div className="order-pizza">
              <Pizza
                name={selectedPizza.name}
                description={selectedPizza.description}
                image={selectedPizza.image}
              />
              <p>{price}</p>
            </div>
          ) : (
            <p>Pizza not found</p>
          )}
        </form>
      </div>
      {loading ? <h2>LOADING...</h2> : <Cart cart={cart} />}
    </div>
  );
}
