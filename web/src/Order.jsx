import { useEffect, useState } from "react";
import Pizza from "./Pizza";

export default function Order() {
  const [pizzaType, setPizzaType] = useState("bbq_ckn");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  let price;
  let selectedPizza = pizzaType;

  if (!loading && pizzaTypes.length > 0) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = selectedPizza.sizes[pizzaSize];
  }

  useEffect(() => {
    try {
      fetchPizzaTypes();
    } catch ({ name, message }) {
      console.log(`Type: ${name}`);
      console.log(`Message: ${message}`);
    }
  }, []);

  async function fetchPizzaTypes() {
    const res = await fetch("/api/pizzas");
    const json = await res.json();
    setPizzaTypes(json);
    setLoading(false);
  }

  return (
    <div className="order">
      <h2>Creator Order</h2>
      <form>
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
          </div>
          <button type="submit">Add to Cart</button>
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
        </div>
      </form>
    </div>
  );
}
