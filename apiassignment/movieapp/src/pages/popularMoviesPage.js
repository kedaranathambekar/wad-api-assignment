import React, { useState } from "react";
import { getPopularMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
// import PlaylistAddIcon from '../components/cardIcons/addToPlaylist';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
const PopularMoviesPage = (props) => {
 
  const {  data, error, isLoading, isError }  = useQuery("popularMovies", getPopularMovies)

  if (isLoading) {
        return <Spinner />
      }
    
      if (isError) {
        return <h1>{error.message}</h1>
      }  
      const movies = data.results;
    
      return (
    
        <PageTemplate
          title="Popular Movies"
          movies={movies}
          action={(movie) => {
            return (
                // <PlaylistAddIcon movie={movie} />
                 <AddToFavouritesIcon movie={movie} />
            );
          }}
        />

    );
    };

export default PopularMoviesPage;