import { Fragment, useState } from "react";

import DetailsModal from "./UI/DetailsModal";
import SubDetails from "./SubDetails";
import { contentType } from "./Constants";

const MovieDetail = (props) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [passedObject, setPassedObject] = useState();

  const closeDetailsHandler = () => {
    setShowDetailsModal(false);
  };

  const passObjectToModal = (obj) => {
    setPassedObject(obj);
    setShowDetailsModal(true);
  };

  return (
    <Fragment>
      <h2 id="title">{props.item.title}</h2>
      <div id="episodeID">Episode#: {props.item.episode_id}</div>
      <br />
      <div id="releaseDate">Release date: {props.item.release_date}</div>
      <br />
      <div id="description">Description: {props.item.opening_crawl}</div>
      <br />
      <div id="director">Director: {props.item.director}</div>
      <br />
      <div id="producer">Producer: {props.item.producer}</div>
      <br />
      <SubDetails
        type={contentType.mainContentPeople}
        items={props.item.characters}
        passObject={passObjectToModal}
      />
      <SubDetails
        type={contentType.mainContentPlanets}
        items={props.item.planets}
        passObject={passObjectToModal}
      />
      <SubDetails
        type={contentType.mainContentStarships}
        items={props.item.starships}
        passObject={passObjectToModal}
      />
      <SubDetails
        type={contentType.mainContentVehicles}
        items={props.item.vehicles}
        passObject={passObjectToModal}
      />
      <SubDetails
        type={contentType.mainContentSpecies}
        items={props.item.species}
        passObject={passObjectToModal}
      />

      {showDetailsModal && (
        <DetailsModal onClose={closeDetailsHandler} item={passedObject} />
      )}
    </Fragment>
  );
};

export default MovieDetail;
