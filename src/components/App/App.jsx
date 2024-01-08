import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Button from 'components/Button/Button';
import Layout from 'components/Layout/Layout';

export const App = () => {
  const onClick = () => {
    console.log();
  };

  return (
    <Layout>
      <Button onClick={onClick}>Go back</Button>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId/*" element={<MovieDetails />}></Route>
        <Route path="/moviedetails" element={<MovieDetails />}></Route>
      </Routes>
    </Layout>
  );
};
