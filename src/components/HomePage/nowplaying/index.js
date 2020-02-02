import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

export default function NowPlaying({ movie }) {
  return (
    <Container>
      <Row>
        {movie.map(function(movie) {
          console.log(movie);
          return (
            <React.Fragment>
              <Col md="3">
                <Card>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <Card.Body></Card.Body>
                </Card>
              </Col>
            </React.Fragment>
          );
        })}
      </Row>
    </Container>
  );
}
