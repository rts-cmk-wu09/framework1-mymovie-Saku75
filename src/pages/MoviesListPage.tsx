import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import MovieList from "../templates/MovieList";
import { MovieItem } from "../types";

export default function MoviesListPage() {
  const { now_playing, popular } = useLoaderData() as {
    now_playing: MovieItem[];
    popular: MovieItem[];
  };

  return (
    <>
      <Heading
        type="h1"
        className="px-4 font-serif text-xl font-black text-blue-900 dark:text-blue-100"
      >
        Movies
      </Heading>
      <article>
        <Heading
          type="h2"
          className="mb-3 px-4 font-serif text-base font-black text-blue-900 dark:text-blue-100"
        >
          Now Playing
        </Heading>
        <MovieList
          className="grid grid-flow-col gap-3 overflow-x-auto px-4"
          items={now_playing}
        />
      </article>
      <article>
        <Heading
          type="h2"
          className="px-4 font-serif text-xl font-black text-blue-900 dark:text-blue-100"
        >
          Popular
        </Heading>
        <MovieList items={popular} />
      </article>
    </>
  );
}
