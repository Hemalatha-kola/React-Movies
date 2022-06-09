import ActorCard from "./ActorCard";

export default function ActorIndexPage(props) {
  let obj = {};
  props.movies.forEach((movie) => {
    movie.cast.forEach((actor) => {
      obj[actor] = 1;
    });
  });

  let actors = Object.keys(obj);

  return (
    <div>
      
      
      {actors.map((actor) => {
        return <ActorCard key={actor} actor={actor} />;
      })}
    </div>
  );
}