
import MovieCard from "./MovieCard";

export default function MovieIndexPage(props) {
    
  return (
    <div>
        
      
     
      <div className="container">
        {props.movies.map((movie) => {
          return <MovieCard key={movie.title} movie={movie} />;
        })}
      </div>
    </div>
  );
}