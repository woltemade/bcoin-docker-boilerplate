import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "../components/footer";

import Header from "../components/header";

import ChainInfo from "./chain/info";
import Mine from "./chain/mine";
import WalletList from "./wallet/walletList";
import CreateWallet from "./wallet/create";
import ImportPublicKey from "./wallet/add";

import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;
const { SubMenu } = Menu;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      collapsed: false,
      pageTitle: "Herald se pageman"
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  setTitle = title => {
    this.setState({
      pageTitle: title
    });
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed: !this.state.collapsed });
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
              trigger={null}
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
                  <Menu.Item key="6">
                    <Link to="/wallets">View Wallets</Link>
                  </Menu.Item>
                  <Menu.Item key="7"><Link to="/wallet/create">Create Wallet</Link></Menu.Item>
                  <Menu.Item key="8"><Link to="/wallet/import">Import Public Key</Link></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Header
                collapsed={this.state.collapsed}
                toggle={this.toggle}
                pageTitle={this.state.pageTitle}
              />
              <Route path="/mine" component={Mine} />
              <Route path="/info" component={ChainInfo} />
              <Route path="/wallets" component={WalletList} />
              <Route path="/wallet/create" component={CreateWallet} />
              <Route path="/wallet/import" component={ImportPublicKey} />
            </Layout>
          </Layout>
          <Footer />
        </Router>
      </div>
    );
  }
}
