import React from "react";
import { Layout, PageHeader, Row, Col, Input } from "antd";

const { Search } = Input;

export default class WalletList extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      data: []
    };
  }

  createWallet(walletId) {
    fetch(`http://localhost:3001/wallet/create?walletId=${walletId}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  isObject(value) {
    return value && typeof value === "object" && value.constructor === Object;
  }

  render() {
    let result;

    if (this.isObject(this.state.data)) {
      result = <pre>{JSON.stringify(this.state.data, null, 2)}</pre>;
    }

    return (
      <Layout>
        <PageHeader title="Create a new wallet" subTitle="" />
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          <Row>
            <Col span={12}>
              <Search
                placeholder="Enter Wallet Id:"
                enterButton="Create"
                size="large"
                onSearch={value => this.createWallet(value)}
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>{result}</Col>
          </Row>
        </div>
      </Layout>
    );
  }
}
