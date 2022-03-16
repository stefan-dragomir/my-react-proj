import { Fragment, useEffect, useState, useReducer, useCallback } from "react";

import useHttp from "./components/hooks/use-http";

import Card from "./components/UI/Card";
import Header from "./components/Layout/Header";
import GenericList from "./components/GenericList";

import { contentType } from "./components/Constants";

const mainPageDefaultState = {
  mainContentType: "",
  mainContentElements: [],
};

const mainContentReducer = (state, action) => {
  if (action.type) {
    return {
      mainContentType: action.type,
      mainContentElements: action.val,
    };
  }

  return mainPageDefaultState;
};

function App() {
  //States and Hooks
  const [rootItems, setRootItems] = useState({});
  const [mainContentState, dispatchMainContent] = useReducer(
    mainContentReducer,
    mainPageDefaultState
  );

  const { isLoading, error, sendRequest } = useHttp();

  //Parser Functions
  const parseContent = (theType, theData) => {
    dispatchMainContent({ type: theType, val: theData });
  };

  const setMainPageHandler = useCallback(
    (target) => {
      let reqType;

      if (target.includes("/films")) {
        reqType = contentType.mainContentMovies;
      } else if (target.includes("/people")) {
        reqType = contentType.mainContentPeople;
      } else if (target.includes("/planets")) {
        reqType = contentType.mainContentPlanets;
      } else if (target.includes("/species")) {
        reqType = contentType.mainContentSpecies;
      } else if (target.includes("/vehicles")) {
        reqType = contentType.mainContentVehicles;
      } else if (target.includes("/starships")) {
        reqType = contentType.mainContentStarships;
      }

      sendRequest({ requestURL: target, requestType: reqType }, parseContent);
    },
    [sendRequest]
  );

  //Creating the header
  useEffect(() => {
    const parseHeader = (theType, theData) => {
      setRootItems(theData);
      setMainPageHandler(theData["films"]);
    };

    sendRequest(
      { requestURL: "https://swapi.dev/api", requestType: "none" },
      parseHeader
    );
  }, [sendRequest, setMainPageHandler]);

  //Creating the content

  const setTheContent = () => {
    if (error) {
      return <Card>{error}</Card>;
    }

    if (isLoading) {
      return <Card>DON'T LOOK, I'M LOADING!</Card>;
    }

    if (mainContentState.mainContentElements.length < 1) {
      return (
        <Card>
          Loading failed or API is busy. Please select your option from the
          above header.
        </Card>
      );
    }

    return (
      <GenericList
        mainContent={mainContentState}
        setMainPage={setMainPageHandler}
      />
    );
  };

  return (
    <Fragment>
      <Header headerItems={rootItems} setMainPage={setMainPageHandler} />
      {setTheContent()}
    </Fragment>
  );
}

export default App;
