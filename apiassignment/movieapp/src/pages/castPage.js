import React from "react";
//import PageTemplate from "../components/templateMovieActorsListPage";
import PageTemplate from "../components/templateCastListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovieActors} from '../api/tmdb-api'
import AddToActorFavouritesIcon from '../components/cardIcons/addActorToFavourites'

const MovieActorsPage = (props) => {
    const {data, error, isLoading, isError}  = useQuery('actors', getMovieActors)
  
    if (isLoading){
       return <Spinner/>
    }
    if (isError) {
      return <h1>{error.message}</h1>
    }
      const actors = data.results;

      
//   // Redundant, but necessary to avoid app crashing.
//   const favourites = actors.filter(m => m.favourite)
//   localStorage.setItem('favourites', JSON.stringify(favourites))
//   const addToFavourites = (actorsId) => true 
   
    return (
      <PageTemplate
        
        actors={actors}
        action={(actors) => {
          return <AddToActorFavouritesIcon actors={actors} />
        }}
      />
    );
  };
  export default MovieActorsPage; 