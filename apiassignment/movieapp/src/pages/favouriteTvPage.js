import React, { useContext } from "react";
import PageTemplate from "../components/templateTvListPage";
import { ShowsContext } from "../contexts/tvContext";
import { useQueries } from "react-query";
import { getTV} from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";

const FavouriteTvPage = () => {
  const {favourites: showIds } = useContext(ShowsContext);

  // Create an array of queries and run in parallel.
  const favouriteShowQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }],
        queryFn: getTV,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const shows = favouriteShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favourite Tv"
      shows={shows}
      action={(show) => {
        return (
          <>
            <RemoveFromFavourites show={show} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTvPage;