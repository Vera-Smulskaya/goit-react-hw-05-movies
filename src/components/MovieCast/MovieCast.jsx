import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const movieCast = await fetchMovieCast(movieId);
        setMovieCast(movieCast);
      } catch (e) {}
    };
    fetchCast();
  }, [movieId]);

  return (
    <ul>
      {movieCast.map(({ id, profile_path, original_name, character }) => (
        <li key={id}>
          <img
            width={200}
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : 'No photo found'
            }
            alt={original_name}
          />
          <div>
            <p>{original_name}</p>
            <p>{character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
