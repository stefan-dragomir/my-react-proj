import Card from "../UI/Card";

const MovieItem = (props) => {
  const enlargeDetailsHandler = (event) => {
    event.preventDefault();

    props.setMainPage(props.item.url);
  };

  return (
    <Card>
      <h2 id="title">{props.item.title}</h2>
      <div id="episodeID">Episode#: {props.item.episode_id}</div>
      <br />
      <div id="releaseDate">Release date: {props.item.release_date}</div>
      <br />
      <div id="description">Description: {props.item.opening_crawl}</div>
      <br />
      <div id="Director">Director: {props.item.director}</div>
      <br />
      <a href={props.item.url} onClick={enlargeDetailsHandler}>
        More details
      </a>
    </Card>
  );
};

export default MovieItem;
