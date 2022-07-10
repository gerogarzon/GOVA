import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const home = () => {
  return (
    <>
      <Container
        fluid
        style={{
          textAlign: "center",
          marginTop: "150px",
        }}
      >
        <Row>
          <Col>
            <h1>Gova Arquitectos</h1>
            <p>Coming Soon</p>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        style={{
          textAlign: "center",
          marginTop: "300px",
        }}
      >
        <Row>
          <h3>Contact us:</h3>
          <Col>
            <p>
              Carrer de les Garrigues 8, Piso 01 Puerta 01 (Valencia – España)
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>govaarquitectos@gmail.com // @gova.arquitecos</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>+54 9 381 5721009 // +54 9 381 4949301</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default home;
