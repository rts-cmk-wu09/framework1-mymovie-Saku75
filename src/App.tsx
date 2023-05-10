import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
import DetailLayout from "./layouts/DetailLayout";
import MainLayout from "./layouts/MainLayout";
import apiLoader from "./lib/apiLoader";
import MovieDetailPage from "./pages/MovieDetailPage";
import MoviesListPage from "./pages/MoviesListPage";
import SearchPage from "./pages/SearchPage";
import ShowDetailPage from "./pages/ShowDetailPage";
import ShowsListPage from "./pages/ShowListPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        loader={() => redirect("/movies")}
      />
      <Route element={<MainLayout />}>
        <Route
          path="movies"
          loader={() =>
            apiLoader([
              { url: "https://api.themoviedb.org/3/movie/now_playing" },
              { url: "https://api.themoviedb.org/3/movie/popular" },
            ])
          }
          element={<MoviesListPage />}
        />
        <Route
          path="shows"
          loader={() =>
            apiLoader([
              { url: "https://api.themoviedb.org/3/tv/airing_today" },
              { url: "https://api.themoviedb.org/3/tv/popular" },
            ])
          }
          element={<ShowsListPage />}
        />
        <Route
          path="search"
          element={<SearchPage />}
        />
      </Route>
      <Route element={<DetailLayout />}>
        <Route
          path="movies/:id"
          loader={({ params }) =>
            apiLoader([
              {
                url: `https://api.themoviedb.org/3/movie/${params.id}`,
              },
            ])
          }
          element={<MovieDetailPage />}
        />
        <Route
          path="shows/:id"
          loader={({ params }) =>
            apiLoader([
              {
                url: `https://api.themoviedb.org/3/tv/${params.id}`,
              },
            ])
          }
          element={<ShowDetailPage />}
        />
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
