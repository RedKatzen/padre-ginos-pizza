import { useFetch } from "../hooks/useFetch";
import currencyConverter from "../util/CurrencyConverter";

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = useFetch("/api/pizza-of-the-day");

  if (!pizzaOfTheDay) {
    return <div>LOADING....</div>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaOfTheDay.name}</h3>
          <p>{pizzaOfTheDay.description}</p>
          <p className="pizza-of-the-day-price">
            From: {currencyConverter(pizzaOfTheDay.sizes.S)}
          </p>
        </div>
        <img
          src={pizzaOfTheDay.image}
          alt={pizzaOfTheDay.name}
          className="pizza-of-the-day-image"
        />
      </div>
    </div>
  );
};

export default PizzaOfTheDay;
