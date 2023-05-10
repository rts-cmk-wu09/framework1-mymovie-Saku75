import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { MovieItem } from "../types";

export default function MovieList(props: {
  items: MovieItem[];
  className?: string;
}) {
  return (
    <ul className={props.className}>
      {props.items.map((item) => (
        <li key={item.id}>
          <Link to={`${item.id}`}>
            <section className="grid h-full w-36 grid-rows-layout gap-3 drop-shadow-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className="w-full rounded-md"
              />
              <Heading
                type="h3"
                className="line-clamp-2 text-ellipsis font-sans text-sm font-bold text-black dark:text-white"
              >
                {item.title}
              </Heading>
              <p className="flex items-center gap-1">
                <MdStar className="text-yellow-400" />
                <span>{item.vote_average}/10 IMDb</span>
              </p>
            </section>
          </Link>
        </li>
      ))}
    </ul>
  );
}
