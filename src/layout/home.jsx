import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const home = () => {
  return (
    <>
      <Container
        fluid
        style={{
          textAlign: "center",
          marginTop: "75px",
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
          marginTop: "75px",
        }}
      >
        <Row>
          <Col>
            <h3>Contact us:</h3>
            <div>Mail: govaarquitectos@gmail.com</div>
            <div>Instagram: @gova.arquitecos</div>
            <div>Phone: +54 9 381 5721009 // +54 9 381 4949301</div>
          </Col>
        </Row>

        <Row
          style={{
            marginTop: "10px",
          }}
        >
          <Col>
            <h3>Visit us:</h3>
            <div>
              Carrer de les Garrigues 8, Piso 01 Puerta 01 (Valencia–España)
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default home;
