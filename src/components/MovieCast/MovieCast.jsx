import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import css from './MovieCast.module.css';
import NoPhoto from '../../images/noPhoto.png';

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
    <ul className={css.listCast}>
      {movieCast.map(({ id, profile_path, original_name, character }) => (
        <li key={id}>
          <img
            width={200}
            height={280}
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : NoPhoto
            }
            alt={original_name}
          />
          <div className={css.blockTextCast}>
            <p className={css.textCast}>{original_name}</p>
            <p className={css.characterCast}>{character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
