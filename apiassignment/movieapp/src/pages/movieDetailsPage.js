import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import Cast from "../pages/castPage";
import PageTemplate from "../components/templateMoviePage";
import PageTemplates from "../components/templateMovieActorsPage"
// import useMovie from "../hooks/useMovie";   Redundant
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import {getCast}  from "../api/tmdb-api"
import Spinner from '../components/spinner';


const MovieDetailsPage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  // const { data: cast, errors, isLoadings, eerror } = useQuery(
  //   ["cast", { id: id }],
  //   getCast
  // );
  if (isLoading ) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <Cast movie ={movie} />
          </PageTemplate>
          
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;