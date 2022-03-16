import Card from "../UI/Card";

const CharacterItem = (props) => {
  return (
    <Card>
      <h2 id="name">{props.item.name}</h2>
      <div id="climate">Climate: {props.item.climate}</div>
      <br />
      <div id="gravity">Gravity: {props.item.gravity}</div>
      <br />
      <div id="terrain">Terrain: {props.item.terrain}</div>
      <br />
      <div id="population">Population: {props.item.population}</div>
      <br />
      <div id="surfacewater">Surface water: {props.item.surface_water}</div>
      <br />
    </Card>
  );
};

export default CharacterItem;
