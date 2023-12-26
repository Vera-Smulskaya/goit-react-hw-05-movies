import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

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
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/moviedetails" element={<MovieDetails />}></Route>
        </Routes>
      </main>
    </div>
  );
};
