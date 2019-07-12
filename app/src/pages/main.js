import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ChainInfo from "./chain/info";
import Mine from "./chain/mine";

import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;
const { SubMenu } = Menu;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      collapsed: false
    };
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render(props) {
    return (
      <div className="App">
        <Router>
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="block" />
                      <span>Chain</span>
                    </span>
                  }
                >
                  <Menu.Item key="3">
                    <Link to="/info">Chain Info</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/mine">Mine</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="wallet" />
                      <span>Wallet</span>
                    </span>
                  }
                >
                  <Menu.Item key="6">View Wallets</Menu.Item>
                  <Menu.Item key="7">Create Wallets</Menu.Item>
                  <Menu.Item key="8">Add Watch Wallet</Menu.Item>
                </SubMenu>
                {/* <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item> */}
              </Menu>
            </Sider>
            <Route path="/mine" component={Mine} />
            <Route path="/info" component={ChainInfo} />
          </Layout>
        </Router>
      </div>
    );
  }
}
