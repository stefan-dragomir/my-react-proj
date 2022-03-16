import { useState } from "react";

import Card from "./UI/Card";

import MovieItem from "./SmallItemsList/MovieItem";
import CharacterItem from "./SmallItemsList/CharacterItem";
import PlanetItem from "./SmallItemsList/PlanetItem";
import SpecieItem from "./SmallItemsList/SpecieItem";
import VehicleItem from "./SmallItemsList/VehicleItem";
import StarshipItem from "./SmallItemsList/StarshipItem";

import MovieDetail from "./MovieDetails";

import GenericListFilter from "./GenericListFilter";

import { contentType } from "./Constants";

import classes from "./GenericList.module.css";

const GenericList = (props) => {
  const [searchCriteria, setSearchCriteria] = useState("");
  const { mainContentType, mainContentElements } = props.mainContent;
  let mainContentList = mainContentElements["results"]; //let because it gets filtered
  const nextPage = mainContentElements["next"];
  const prevPage = mainContentElements["previous"];

  let itmKey = 0;

  const naviClickHandler = (event) => {
    event.preventDefault();

    props.setMainPage(event.target.href);
  };

  const setMainPageHandler = (url) => {
    props.setMainPage(url);
  };

  //Filtering the content
  const filterContent = (searchCriteria) => {
    setSearchCriteria(searchCriteria);
  };

  if (searchCriteria !== "") {
    mainContentList = mainContentElements["results"].filter((item) => {
      if (item.title) {
        return item.title.toLowerCase().includes(searchCriteria.toLowerCase());
      } else {
        return item.name.toLowerCase().includes(searchCriteria.toLowerCase());
      }
    });
  }

  if (mainContentElements["title"]) {
    return (
      <ul>
        <li>
          <Card>
            <MovieDetail item={mainContentElements} />
          </Card>
        </li>

        <li className={classes.navi}>
          <Card>
            <a href="https://swapi.dev/api/films/" onClick={naviClickHandler}>
              Back
            </a>
          </Card>
        </li>
      </ul>
    );
  }

  return (
    <ul>
      <li className={classes.search}>
        <GenericListFilter filterAction={filterContent} />
      </li>

      {mainContentList.map((itm) => (
        <li key={itmKey++}>
          {mainContentType === contentType.mainContentMovies ? (
            <MovieItem item={itm} setMainPage={setMainPageHandler} />
          ) : mainContentType === contentType.mainContentPeople ? (
            <CharacterItem item={itm} />
          ) : mainContentType === contentType.mainContentPlanets ? (
            <PlanetItem item={itm} />
          ) : mainContentType === contentType.mainContentVehicles ? (
            <VehicleItem item={itm} />
          ) : mainContentType === contentType.mainContentStarships ? (
            <StarshipItem item={itm} />
          ) : mainContentType === contentType.mainContentSpecies ? (
            <SpecieItem item={itm} />
          ) : (
            <Card>
              <div>No Items Retrieved!</div>
            </Card>
          )}
        </li>
      ))}
      {(prevPage || nextPage) && (
        <li className={classes.navi}>
          <Card>
            {prevPage && (
              <a href={prevPage} onClick={naviClickHandler}>
                Previous
              </a>
            )}
            {nextPage && (
              <a href={nextPage} onClick={naviClickHandler}>
                Next
              </a>
            )}
          </Card>
        </li>
      )}
    </ul>
  );
};

export default GenericList;
