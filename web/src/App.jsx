import { createRoot } from "react-dom/client";
import Order from "./components/Order";
import PizzaOfTheDay from "./components/PizzaOfTheDay";

const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's - Order Now!</h1>
      <Order />
      <PizzaOfTheDay />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
