import Movie from "./Movie";
import "./GenreList.css";

const GenreList = (props) => {
  return (
    <div className="genrelist">
      <h1>{props.genreName}</h1>
      <Movie movieData={props.movies[0]} />
      <Movie movieData={props.movies[1]} />
      <Movie movieData={props.movies[2]} />
    </div>
  );
};

export default GenreList;

//<Movie movieData={scifi[0]} />
//<Movie movieData={scifi[1]} />
//<Movie movieData={scifi[2]} />
