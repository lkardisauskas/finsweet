import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const AboutUs = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <div>Content 1</div>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div>Centered Content</div>
        </Col>
      </Row>
    </Container>
  );
};
