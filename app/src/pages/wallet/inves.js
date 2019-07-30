import React from "react";
import { Layout, PageHeader, Row, Col, Input } from "antd";

const { Search } = Input;

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      data: null
    };
  }

  createWallet(xpub) {
    console.log(xpub);
    fetch(`http://localhost:3001/wallet/inves?xpub=${xpub}`)
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
        <PageHeader title="Add a new wallet" subTitle="" />
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          <Row>
            <Col span={24}>
              <Search
                placeholder="Enter xpub key:"
                enterButton="Create"
                size="large"
                onSearch={xpub => this.createWallet(xpub)}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>{result}</Col>
          </Row>
        </div>
      </Layout>
    );
  }
}
