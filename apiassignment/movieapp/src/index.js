import React from "react";
import {createRoot} from "react-dom/client";
//import { BrowserRouter, Route, Redirect, Switch, Link, Navigate } from "react-router-dom";

import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import FavouriteTvPage from "./pages/favouriteTvPage";
import {Link} from 'react-router-dom';
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpComingPage from './pages/upcomingMovpages';
import PopularMoviesPage from "./pages/popularMoviesPage";
//import MovieActorsPage from "./pages/MovieActorsPage.js";
import TopRatedMoviesPage from "./pages/topRateMoviePage";
import SignUpPage from "./pages/signupPage";
// import LoginPage from "./components/login";  
// import AuthProvider from "./contexts/authContext";
// import AuthHeader from "./components/authHeader";
import LoginPage from "./components/authGroup/loginPage";
import AuthHeader from "./components/authGroup/goal";
import AuthProvider from "./components/authGroup/authContext";
import ProtectedRotue from "./components/authGroup/protectedRotue";
import MovieActorsPage from "./pages/actorPage";
import MovieActorDetailsPage from "./pages/actorDetailsPage";
import PrivateRoute from "./privateRoute";
import Tv from "./pages/tvSeriesPage";
import Tvs from "./pages/tvSeriesDetailPage";
import TvContextProvider from "./contexts/tvContext";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <AuthProvider> 
   
        <SiteHeader />
        <AuthHeader />   
          <MoviesContextProvider>
            <TvContextProvider>
            {" "}
          <Routes>
          {/* <Route path="/signup" element={<SignUpPage/>} /> */}
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
          <Route exact path="/tv/favourites" element={<FavouriteTvPage />} />     
          <Route exact path="/movies/upcoming" element={<ProtectedRotue><UpComingPage /></ProtectedRotue>} />
          <Route exact path="/movies/popular" element={<PopularMoviesPage />} />
          <Route exact path= "/movies/toprated" element={<TopRatedMoviesPage/>} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/actors/" element={<MovieActorsPage />} />
          <Route path="/actors/:id" element={<MovieActorDetailsPage />} />
          <Route path="/tv" element={ < Tv/> } />
          <Route path ="/tv/:id" element={<Tvs/>}/>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
          </TvContextProvider>
          </MoviesContextProvider>
       </AuthProvider> 
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );