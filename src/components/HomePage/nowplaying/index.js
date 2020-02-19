import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NowPlaying({ movie }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <Container>
      <div className="clearfix mt-5 mb-2">
        <h4 className="float-left">Now Playing</h4>
        <Link className="float-right text-uppercase" to="/">
          see all
        </Link>
      </div>
      <Slider {...settings}>
        {movie.map(function(movie) {
          return (
            <React.Fragment>
              <Link to={`/movies/${movie.id}`}>
                <Col>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                    <Card.Body>
                      <span>{movie.title}</span>
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
            </React.Fragment>
          );
        })}
      </Slider>
    </Container>
  );
}
