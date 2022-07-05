import { HomeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
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
              margin: "24px 16px 0",
              textAlign: "center",
              fontSize: "40px",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <h1>Gova arquitectos</h1>
              <p
                style={{
                  margin: "24px 16px 0",
                  textAlign: "center",
                  fontSize: "15px",
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
            <p>Carrer de les Garrigues 8, Piso 01 Puerta 01</p>
            <p>Valencia – España</p>
            <p>govaarquitectos@gmail.com </p>
            <p>+54 9 381 5721009 // +54 9 381 4949301</p>
            <p> @gova.arquitecos</p>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default home;
