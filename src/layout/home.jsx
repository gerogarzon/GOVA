import { HomeOutlined, AppstoreOutlined, TeamOutlined  } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import  {Row, Col} from 'react-bootstrap';
const { Header, Content, Footer, Sider } = Layout;

const home = () => {
  return (
    <>
      <Layout
        style={{
          height: "100vh",
        }}
      >
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            defaultSelectedKeys={["0"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            //   inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="1" icon={<AppstoreOutlined />}>
              Proyectos
            </Menu.Item>
            <Menu.Item key="1" icon={<TeamOutlined /> }>
              Sobre Nosotros
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {/* <Header
            className="site-layout-sub-header-background"
            style={{
              padding: 0,
            }}
          /> */}
          <Content
            style={{
              margin: "15px",
              textAlign: "center",
              fontSize: "40px",
              padding: "10px",
              backgroundColor: "#001529",
            }} 
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <h1 style={{color:"grey"}}>Gova arquitectos</h1>
              <p
                style={{
                  margin: "24px 16px 0",
                  textAlign: "center",
                  fontSize: "15px",
                  color: "grey",
                }}
              >
                Comming soon
              </p>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              fontSize: "13px",
            }}
          >
            <Row>
              <Col>Carrer de les Garrigues 8, Piso 01 Puerta 01 (Valencia – España)</Col>
              <Col>govaarquitectos@gmail.com // @gova.arquitecos </Col>
              <Col> +54 9 381 5721009 // +54 9 381 4949301</Col>
            </Row>
            
          
            
           
            
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default home;
