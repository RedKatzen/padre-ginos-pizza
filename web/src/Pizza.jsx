export default function Pizza(props) {
  return (
    <div className="pizza">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
}
