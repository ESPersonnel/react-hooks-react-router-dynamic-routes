import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {

  const match = useRouteMatch();

  return (
    <div>
      <MoviesList movies={movies} />
      <Route exactpath={match.url}>
        <h3>Please select a movie.</h3>
      </Route>
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
