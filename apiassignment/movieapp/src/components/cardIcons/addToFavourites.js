import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { ActorContext } from "../../contexts/actorContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIcon = ({ movie,actor }) => {
  const context = useContext(MoviesContext,ActorContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(movie,actor);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;