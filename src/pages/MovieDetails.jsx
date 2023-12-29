import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();
  const { movieDetails, setMovieDetails } = useState(null);
  const { isLoading, setIsLoading } = useState(null);
  const { error, setError } = useState(null);

  const appKey = '7e63573e5f6a11223e01d9dfd6333e93';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          '/https://api.themoviedb.org/3/trending/movie/day?api_key=7e63573e5f6a11223e01d9dfd6333e93'
        );
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <h1>MovieDetails MovieId: {movieId}</h1>
      {error !== null && <p>{error}</p>}
      {isLoading && <Loader />}
      {movieDetails !==
        null(
          <div>
            <h2>{movieDetails.title}</h2>
            <h3>{movieDetails.overview}</h3>
            <h3>{movieDetails.genres}</h3>
          </div>
        )}
      <div>
        <p>Additional information</p>
      </div>
    </div>
  );
}
