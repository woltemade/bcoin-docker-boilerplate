import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "../components/footer";

import Header from "../components/header";

import ChainInfo from "./chain/info";
import Inves from "./wallet/inves";

import Mine from "./chain/mine";
import WalletList from "./wallet/walletList";
import CreateWallet from "./wallet/create";
import ImportPublicKey from "./wallet/add";

import { Layout, Menu, Icon, Progress, Row, Col } from "antd";
const { Sider } = Layout;
const { SubMenu } = Menu;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      collapsed: false,
      pageTitle: "",
      chainNetwork: "node",
      chainProgress: 0.0001,
      network: process.env.REACT_APP_BCOIN_NETWORK
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

  busySyncingPage() {
    return (
      <Layout>
        <Row>
          <Col span={4} />
          <Col span={16}>
            <h2>Blockchain {this.state.chainNetwork} is busy syncing...</h2>
            <Progress
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068"
              }}
              percent={Math.round(this.state.chainProgress * 10000) / 100}
            />
          </Col>
          <Col span={4} />
        </Row>
      </Layout>
    );
  }

  isRegtest() {
    if (this.state.network === "regtest") {
      return true;
    }
    return false;
  }
  homePage() {
    return (
      <Layout>
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
              {this.isRegtest() && (
                <Menu.Item key="4">
                  <Link to="/mine">Mine</Link>
                </Menu.Item>
              )}
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
              {this.isRegtest() && (
                <Menu.Item key="7">
                  <Link to="/wallet/create">Create Wallet</Link>
                </Menu.Item>
              )}
              {this.isRegtest() && (
                <Menu.Item key="8">
                  <Link to="/wallet/import">Import Public Key</Link>
                </Menu.Item>
              )}
              <Menu.Item key="9">
                <Link to="/wallet/inves">Inves Create Wallet</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            collapsed={this.state.collapsed}
            toggle={this.toggle}
            pageTitle={this.state.pageTitle}
            network={this.state.network}
          />
          <Route path="/mine" component={Mine} />
          <Route path="/info" component={ChainInfo} />
          <Route path="/wallets" component={WalletList} />
          <Route path="/wallet/create" component={CreateWallet} />
          <Route path="/wallet/import" component={ImportPublicKey} />
          <Route path="/wallet/inves" component={Inves} />
        </Layout>
      </Layout>
    );
  }
  componentDidMount() {
    // this.timer = setInterval(() => this.getChainState(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getChainState() {
    if (this.chainIsInReadyState()) {
      clearInterval(this.timer);
    } else {
      fetch("http://localhost:3001/chain/info")
        .then(response => response.json())
        .then(data =>
          this.setState({
            chainProgress: data.chain.progress,
            chainNetwork: `[${data.network}] node`
          })
        );
    }
  }
  chainIsInReadyState() {
    if (this.state.chainProgress < 1) {
      return false;
    } else {
      return true;
    }
  }

  render(props) {
    let page;
    if (this.chainIsInReadyState()) {
      page = this.homePage();
    } else {
      page = this.homePage(); //this.busySyncingPage();
    }

    return (
      <div className="App">
        <Router>
          <Layout style={{ minHeight: "100vh", minWidth: "100vw" }}>
            {page}
            <Footer />
          </Layout>
        </Router>
      </div>
    );
  }
}
