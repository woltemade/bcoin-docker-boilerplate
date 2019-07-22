import React from "react";
import { Layout, PageHeader, Row, Col, Input } from "antd";

const { Search } = Input;

export default class ImportPublicKey extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      data: [],
      walletId: "",
      accountId: "",
      publicKey: "",
      passPhrase: ""
    };
  }

  handleChange = walletId => {
    this.setState({
      walletId
    });
  };
  addPublicKey(publicKey) {
    this.setState({
      publicKey
    });
    const { walletId, accountId, passPhrase } = this.state;
    console.log('front end:', walletId, accountId, passPhrase, publicKey)
    console.log('fetching', `http://localhost:3001/wallet/add?walletId=${walletId}&accountId=${accountId}&passPhrase=${passPhrase}&pubKey=${publicKey}`)
    fetch(
      `http://localhost:3001/wallet/add?walletId=${walletId}&accountId=${accountId}&passPhrase=${passPhrase}&pubKey=${publicKey}`
    )
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log('error in fetch:', err));
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
        <PageHeader title="Import Wallet from Public Key" subTitle="" />
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          <Row>
            <Col span={12}>
              <Input placeholder="Wallet Id" size="large" onChange={e => this.handleChange(e.target.value)}/>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Search
                placeholder="Enter Public Id:"
                enterButton="Create"
                size="large"
                onSearch={value => this.addPublicKey(value)}
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
