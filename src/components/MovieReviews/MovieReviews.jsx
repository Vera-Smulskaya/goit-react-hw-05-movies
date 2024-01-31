import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(results => setMovieReviews(results))
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <ul>
      {movieReviews
        ? movieReviews.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>
              <p className={css.textReviews}>{review.content}</p>
            </li>
          ))
        : 'there are no reviews'}
    </ul>
  );
}
