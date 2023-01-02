import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateTvListPage";
import { getTvs } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
//import AddToFavouritesIconShow from "../components/cardIcons/addToFavouritesShow";


const TvPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('shows', getTvs)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;


  
    return (
      <PageTemplate
        title="Tv Shows"
        shows={shows}
      action={(show) => {
        return (
        <>
      
     </>
        );
      }}
      />
    );
  };

  export default TvPage;