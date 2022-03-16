import { Fragment } from "react";
import { createPortal } from "react-dom";

import Card from "./Card";

import CharacterItem from "../SmallItemsList/CharacterItem";
import PlanetItem from "../SmallItemsList/PlanetItem";
import SpecieItem from "../SmallItemsList/SpecieItem";
import StarshipItem from "../SmallItemsList/StarshipItem";
import VehicleItem from "../SmallItemsList/VehicleItem";

import classes from "./DetailsModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const DetailsModal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <Card className={classes.modal}>
          {props.item["species"] ? (
            <CharacterItem item={props.item} />
          ) : props.item["gravity"] ? (
            <PlanetItem item={props.item} />
          ) : props.item["classification"] ? (
            <SpecieItem item={props.item} />
          ) : props.item["starship_class"] ? (
            <StarshipItem item={props.item} />
          ) : (
            <VehicleItem item={props.item} />
          )}
        </Card>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default DetailsModal;
