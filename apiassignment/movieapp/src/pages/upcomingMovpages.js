import React, {useContext} from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist';
import { Pagination, PaginationItem } from "@mui/material";
import { useState } from "react";
import Typography from "@mui/material/Typography";

const UpcomingMoviesPage = (props) => {
  const [page, setPage] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const movies = data.results;
    return (
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return (
          <PlaylistAddIcon movie={movie} />
          );
        } } 
        />
       
    );  
};
export default UpcomingMoviesPage;