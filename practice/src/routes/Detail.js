import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.large_cover_image} alt={movie.title} />
          <h2>평점 : {movie.rating}</h2>
          <h2>러닝타임 : {movie.runtime}분</h2>
          <h3>개봉일 : {movie.year}</h3>
          <p>
            줄거리 <hr />
            {movie.description_full}
          </p>
          <ul>
            <h1>장르</h1>
            <br />
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Detail.propTypes = {
  id: PropTypes.number.isRequired,
  large_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Detail;
