import Pizza from "./Pizza";

export default function Order() {
  const pizzaType = "pepporoni";
  const pizzaSize = "M";

  return (
    <div className="order">
      <h2>Creator Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select name="pizza-type" value={pizzaType}>
              <option value="pepperoni">The Pepperoni Pizza</option>
              <option value="hawaiian">The Hawaiian Pizza</option>
              <option value="big_meat">The Big Meat Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Siza</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
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
                  name="pizza-size"
                  type="radio"
                  value="L"
                  id="pizza-c"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizza">
            <Pizza
              name="Pepperoni"
              description="Tomato, mozzarella, and pepperoni"
              image={"/public/pizzas/pepperoni.webp"}
            />
            <p>$13.37</p>
          </div>
        </div>
      </form>
    </div>
  );
}
