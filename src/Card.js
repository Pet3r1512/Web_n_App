export default function Card({ movie }) {
  return (
    <div className="card">
      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div>
        <h3>{movie.Title}</h3>
        <p>{movie.Type}</p>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}
