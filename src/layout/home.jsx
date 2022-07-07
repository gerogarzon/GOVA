
import { Layout } from "antd";
import React from "react";
import { Row, Col } from "react-bootstrap";
const { Content } = Layout;

const home = () => {
  return (
    <>
      <Layout
        style={{
          height: "100vh",
        }}
      >
        <Content
          style={{
        
            textAlign: "center",
            fontSize: "20px",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              margin:"60px",
              minHeight: 360,
            }}
          >
            <h1 style={{fontSize:"50px"}}>Gova arquitectos</h1>
            <p
              style={{
                margin: "24px",
                textAlign: "center",
              }}
            >
              Comming soon
            </p>
          </div>
          
          <Row>
            <Col>
              Carrer de les Garrigues 8, Piso 01 Puerta 01 (Valencia – España)
            </Col>
            <Col>govaarquitectos@gmail.com // @gova.arquitecos </Col>
            <Col> +54 9 381 5721009 // +54 9 381 4949301</Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default home;
