import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId/*" element={<MovieDetailsDetails />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
