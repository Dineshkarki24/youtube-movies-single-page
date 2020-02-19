import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

export default function SingleMoviesPage(props) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=02689249b40636b114a2add6006bff65&language=en-US`
    )
      .then(res => setMovie(res.data))
      .catch(err => console.error(err));
  }, []);

  console.log(Array.isArray(movie.genres) && movie.genres.map(el => el));
  return (
    <Container className="mt-5">
      <Row>
        <Col md="6">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
        </Col>
        <Col md="6">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <ul>
            <li>Revenue:{movie.revenue}</li>
            <li>Popularity:{movie.popularity}</li>
            <li>original_language:{movie.original_language}</li>
            <li>
              Generes:
              {Array.isArray(movie.genres) &&
                movie.genres.map(el => <span className="ml-2">{el.name}</span>)}
            </li>
            <li>release_date:{movie.release_date}</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
