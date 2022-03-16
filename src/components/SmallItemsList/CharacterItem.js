import Card from "../UI/Card";

const CharacterItem = (props) => {
  return (
    <Card>
      <h2 id="name">{props.item.name}</h2>
      <div id="height">Height: {props.item.height}</div>
      <br />
      <div id="mass">Mass: {props.item.mass}</div>
      <br />
      <div id="gender">Gender: {props.item.gender}</div>
      <br />
      <div id="height">Height: {props.item.height}</div>
      <br />
      <div id="eyecolor">Eye Color: {props.item.eye_color}</div>
      <br />
      <div id="birthyear">Birth Year: {props.item.birth_year}</div>
      <br />
    </Card>
  );
};

export default CharacterItem;
