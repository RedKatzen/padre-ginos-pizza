import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now!</h1>
      <Pizza name="Margherita" description="Tomato, mozzarella, and basil" />
      <Pizza name="Pepperoni" description="Tomato, mozzarella, and pepperoni" />
      <Pizza
        name="Vegetarian"
        description="Tomato, mozzarella, and vegetables"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
