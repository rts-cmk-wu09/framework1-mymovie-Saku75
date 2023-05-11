import { MdStar } from "react-icons/md";

export default function Rating(props: {
  vote_average: number;
  vote_count?: number;
  className?: string;
}) {
  return (
    <p className={props.className}>
      <MdStar className="text-yellow-400" />
      <span>{props.vote_average}/10 IMDb</span>
      {props.vote_count && <span>({props.vote_count} votes)</span>}
    </p>
  );
}
