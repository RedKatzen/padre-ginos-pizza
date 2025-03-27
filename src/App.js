const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "A classic pizza with pepperoni",
    }),
    React.createElement(Pizza, {
      name: "Margherita",
      description: "A simple pizza with basil and tomatoes",
    }),
    React.createElement(Pizza, {
      name: "BBQ Chicken",
      description: "A pizza with BBQ sauce and chicken",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "A pizza with ham and pineapple",
    }),
    React.createElement(Pizza, {
      name: "Meat Lover's",
      description: "A pizza with all the meats",
    }),
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
