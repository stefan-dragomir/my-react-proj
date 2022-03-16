import { useEffect, useState } from "react";

import useHttp from "./hooks/use-http";

import { contentType } from "./Constants";

const SubDetails = (props) => {
  const { sendRequest } = useHttp();
  const [names, setNames] = useState([]);

  let collectionName;
  let itmKey = 0;

  useEffect(() => {
    const parseContent = (theType, theData) => {
      setNames((prevState) => [...prevState, theData]);
    };

    for (const itm of props.items) {
      sendRequest({ requestURL: itm, requestType: "none" }, parseContent);
    }
  }, [sendRequest, props.items]);

  const detailClickHandler = (event) => {
    event.preventDefault();

    let tempObj = names.find((itm) => itm["name"] === event.target.text);
    props.passObject(tempObj);
  };

  switch (props.type) {
    case contentType.mainContentPeople:
      collectionName = "Characters";
      break;
    case contentType.mainContentPlanets:
      collectionName = "Planets";
      break;
    case contentType.mainContentStarships:
      collectionName = "Starships";
      break;
    case contentType.mainContentVehicles:
      collectionName = "Vehicles";
      break;
    case contentType.mainContentSpecies:
      collectionName = "Species";
      break;
    default:
      break;
  }

  return (
    <div>
      <p>{collectionName}</p>
      <ul>
        {names.map((itm) => (
          <li key={itmKey++}>
            <a href={itm["url"]} onClick={detailClickHandler}>
              {itm["name"]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubDetails;
