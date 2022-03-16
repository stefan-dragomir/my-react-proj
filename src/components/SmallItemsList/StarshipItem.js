import Card from "../UI/Card";

const StarshipItem = (props) => {
  return (
    <Card>
      <h2 id="name">{props.item.name}</h2>
      <div id="model">Model: {props.item.model}</div>
      <br />
      <div id="class">Starship Class: {props.item.starship_class}</div>
      <br />
      <div id="manufacturer">Manufacturer: {props.item.manufacturer}</div>
      <br />
      <div id="crew">Crew: {props.item.crew}</div>
      <br />
      <div id="passengers">Passengers: {props.item.passengers}</div>
      <br />
      <div id="cargo_capacity">Cargo Capacity: {props.item.cargo_capacity}</div>
      <br />
      <div id="hdrating">Hyperdrive Rating: {props.item.hyperdrive_rating}</div>
      <br />
    </Card>
  );
};

export default StarshipItem;
