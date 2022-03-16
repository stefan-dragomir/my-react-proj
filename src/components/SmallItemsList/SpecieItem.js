import Card from "../UI/Card";

const CharacterItem = (props) => {
  return (
    <Card>
      <h2 id="name">{props.item.name}</h2>
      <div id="classification">Classification: {props.item.classification}</div>
      <br />
      <div id="averagelifespan">Height: {props.item.average_lifespan}</div>
      <br />
      <div id="language">Language: {props.item.language}</div>
      <br />
      <div id="skincolors">Skin Colors: {props.item.skin_colors}</div>
      <br />
      <div id="haircolors">Hair Colors: {props.item.hair_colors}</div>
      <br />
      <div id="eyecolors">Eye Colors: {props.item.eye_colors}</div>
      <br />
    </Card>
  );
};

export default CharacterItem;
