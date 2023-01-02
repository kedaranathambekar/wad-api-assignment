import React, { useContext } from "react";
import { ShowsContext } from "../../contexts/tvContext";
//import { ActorContext } from "../../contexts/actorContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIcon = ({ show,actor }) => {
  const context = useContext(ShowsContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(show,actor);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;