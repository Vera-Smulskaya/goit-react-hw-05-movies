import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import css from './MoviesList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>
      <ul className={css.movieList}>
        {movies
          ? movies.map(movie => (
              <NavLink
                state={{ from: location }}
                className={css.movieItem}
                to={`/movies/${movie.id}`}
                key={movie.id}
              >
                <li key={movie.id}>
                  <h4 className={css.movieItem}>
                    {movie.title ? movie.title : movie.name}
                  </h4>
                  <img
                    className={css.movieImage}
                    alt={movie.title ? movie.title : movie.name}
                    title={movie.title ? movie.title : movie.name}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                        : 'no-image'
                    }
                  />
                </li>
              </NavLink>
            ))
          : null}
      </ul>
    </div>
  );
}
