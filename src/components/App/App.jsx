import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Button from 'components/Button/Button';

export const App = () => {
  return (
    <div>
      <header>
        <NavLink className={css.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.navLink} to="/Movies">
          Movies
        </NavLink>
        <NavLink className={css.navLink} to="/MovieDetails">
          MovieDetails
        </NavLink>
      </header>
      <main>
        <Button onClick={onClick}>Go back</Button>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
          <Route path="/moviedetails" element={<MovieDetails />}></Route>
        </Routes>
      </main>
    </div>
  );
};
