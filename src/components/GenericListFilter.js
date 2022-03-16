import { useRef } from "react";

import Card from "./UI/Card";
import classes from "./GenericListFilter.module.css";

const GenericListFilter = (props) => {
  const searchBoxRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.filterAction(searchBoxRef.current.value);
  };

  const onResetHandler = (event) => {
    props.filterAction("");
    searchBoxRef.current.value = "";
  };

  return (
    <Card className={classes.search}>
      <form id="searchForm" onSubmit={onSubmitHandler}>
        <input type="text" ref={searchBoxRef} />
      </form>
      <button onClick={onSubmitHandler}>Search</button>
      <button onClick={onResetHandler}>Reset</button>
    </Card>
  );
};

export default GenericListFilter;
