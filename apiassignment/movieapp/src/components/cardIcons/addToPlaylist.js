import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const AddToFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavourites = (e) => {
    context.addToFavourites(movie);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;