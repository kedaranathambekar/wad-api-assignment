import React, { useState } from "react";

export const ActorContext = React.createContext(null);

const ActorContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 

  const [favourites, setFavourites] = useState( [] )
  const [playlist, setPlaylist] = useState( [] )

  const addToFavourites = (actor) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(actor.id)) {
      newFavourites.push(actor.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (actor) => {
    setFavourites( favourites.filter(
      (mId) => mId !== actor.id
    ) )
  };
  
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)){
      newPlaylist = [...playlist, movie.id];
      setPlaylist(newPlaylist)
    }
    
    // console.log(playlist);
  };

  return (
    <ActorContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
       
      }}
    >
      {props.children}
    </ActorContext.Provider>
  );
};

export default ActorContextProvider;
