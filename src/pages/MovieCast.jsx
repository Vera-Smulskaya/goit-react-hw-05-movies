import React from 'react';
import { useParams } from 'react-router-dom';

export default function MovieCast() {
  const { movieId } = useParams();

  return <div>MovieCast: {movieId}</div>;
}
