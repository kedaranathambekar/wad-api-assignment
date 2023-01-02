export const getMovies = (args) => {
  const [, page] = args.queryKey;
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };
  
  export const getMovie = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };
  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };
  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
        throw error
    });
  }
  //added new one 

  export const getPopularMovies   = () => {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
        throw error
    });
  }

  //added actors

  export const getActorsImages   = ({queryKey}) => {
    const [, idPart] = queryKey;
  const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
        throw error
    });
  }
  export const getMovieActorsDetails = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      })
      .catch((error) => {
        throw error
     });
    };


    export const getMovieActors = () => {
      return fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
           throw error
        });
      };
      export const getCast   = (args) => {
        const [, idPart] = args.queryKey;
        const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
        throw error
    });
  }
  export const getTopRatedMovies = (args) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
        ).then((response) => {
          if (!response.ok) {
           throw new Error(response.json().message);
          }
          return response.json();
          })
          .catch((error) => {
           throw error
         });
         };
export const getTVImages = ({ queryKey }) => {
          const [, idPart] = queryKey;
          const { id } = idPart;
          return fetch(
            `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
            ).then( (response) => {
              if (!response.ok) {
                throw new Error(response.json().message);
              }
              return response.json();
          
            })
            .catch((error) => {
              throw error
           });
          };
export const getTV = (args) => {
            console.log(args)
            const [, idPart] = args.queryKey;
            const { id } = idPart;
            return fetch(
              `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
              ).then((response) => {
                if (!response.ok) {
                  throw new Error(response.json().message);
                }
                return response.json();
              })
              .catch((error) => {
                throw error
             });
            };
  export const getDiscoverTV = () => {
              return fetch(
                `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
                ).then((response) => {
                  if (!response.ok) {
                    throw new Error(response.json().message);
                  }
                  return response.json();
                })
                .catch((error) => {
                   throw error
                });
              };
              export const getTVReviews = (id) => {
                return fetch(
                  `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
                  )
                  .then((res) => res.json())
                  .then((json) => {
                    // console.log(json.results);
                    return json.results;
                  });
              };

              export const getTvImages = ({ queryKey }) => {
                const [, idPart] = queryKey;
                const { id } = idPart;
                return fetch(
                  `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
                  ).then( (response) => {
                    if (!response.ok) {
                      throw new Error(response.json().message);
                    }
                    return response.json();
                
                  })
                  .catch((error) => {
                    throw error
                 });
                };
                export const getTvs = () => {
                  return fetch(
                    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_video=false&page=1`
                    ).then((response) => {
                      if (!response.ok) {
                        throw new Error(response.json().message);
                      }
                      return response.json();
                    })
                    .catch((error) => {
                       throw error
                    });
                  };

                  export const getTv = (args) => {
                    // console.log(args)
                    const [, idPart] = args.queryKey;
                    const { id } = idPart;
                    return fetch(
                      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
                      ).then((response) => {
                        if (!response.ok) {
                          throw new Error(response.json().message);
                        }
                        return response.json();
                      })
                      .catch((error) => {
                        throw error
                     });
                    };