import React from "react";
import { Layout, PageHeader, Select, Spin, Row, Col, Collapse } from "antd";

const { Option } = Select;
const { Panel } = Collapse;
export default class WalletList extends React.Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
  }

  state = {
    data: [],
    value: [],
    walletInfo: [],
    walletAccounts: [],
    accountValue: [],
    accountInfo: [],
    selectedWallet: "",
    fetching: false
  };

  callback(key) {
    console.log(key);
  }

  fetchWallets() {
    this.setState({ data: [], fetching: true });
    fetch("http://localhost:3001/wallet/list")
      .then(response => response.json())
      .then(data => this.setState({ data, fetching: false }));
  }

  fetchWalletInfo = value => {
    console.log("getting wallet info for", value);
    this.setState({ walletInfo: [], fetching: true });
    fetch(`http://localhost:3001/wallet/info?walletId=${value}`)
      .then(response => response.json())
      .then(walletInfo => this.setState({ walletInfo, fetching: false }));
  };

  fetchWalletAccounts = value => {
    console.log(
      "getting accounts for",
      `http://localhost:3001/wallet/accounts/list?accountId=${value}`
    );
    this.setState({ walletAccounts: [], fetching: true });
    fetch(`http://localhost:3001/wallet/accounts/list?accountId=${value}`)
      .then(response => response.json())
      .then(walletAccounts =>
        this.setState({ walletAccounts, fetching: false })
      );
  };

  fetchAccountInfo = (walletId, accountId) => {
    console.log("getting account info for", walletId, accountId);
    this.setState({ accountInfo: [], fetching: true });
    fetch(
      `http://localhost:3001/wallet/accounts/info?walletId=${walletId}&accountId=${accountId}`
    )
      .then(response => response.json())
      .then(accountInfo => this.setState({ accountInfo, fetching: false }));
  };

  handleChange = value => {
    this.setState({
      value,
      fetching: false
    });
    this.fetchWalletInfo(value.label);
    this.fetchWalletAccounts(value.label);
  };

  handleAccountChange = accountValue => {
    this.setState({
      accountValue,
      fetching: false
    });
    this.fetchAccountInfo(this.state.value.label, accountValue.label);
  };

  componentDidMount() {
    this.fetchWallets();
  }
  render() {
    const { fetching, data, value, walletAccounts, accountValue } = this.state;
    return (
      <Layout>
        <PageHeader title="List of wallets" subTitle="" />
        <div style={{ padding: 24, background: "#fff", minHeight: 495 }}>
          <Row>
            <Col span={6}>
              Select a wallet:
              <Select
                labelInValue
                value={value}
                placeholder="Select a wallet"
                notFoundContent={fetching ? <Spin size="small" /> : null}
                filterOption={false}
                //onSearch={this.fetchWallets}
                onChange={this.handleChange}
                style={{ width: "100%" }}
              >
                {data.map(d => (
                  <Option key={d.key}>{d.value}</Option>
                ))}
              </Select>
            </Col>
            <Col span={18}>
              <br />
              <Collapse defaultActiveKey={["0"]} onChange={this.callback}>
                <Panel header="Wallet Info" key="1">
                  <pre>{JSON.stringify(this.state.walletInfo, null, 2)}</pre>
                </Panel>
              </Collapse>
            </Col>
          </Row>

          <Row>
            <Col span={6}>
              Select an account:
              <Select
                labelInValue
                value={accountValue}
                placeholder="Select an account"
                notFoundContent={fetching ? <Spin size="small" /> : null}
                filterOption={false}
                //onSearch={this.fetchWalletAccounts}
                onSelect={this.handleAccountChange}
                style={{ width: "100%" }}
              >
                {walletAccounts.map(d => (
                  <Option key={d.key}>{d.value}</Option>
                ))}
              </Select>
            </Col>
            <Col span={18}>
              <br />
              <Collapse defaultActiveKey={["0"]} onChange={this.callback}>
                <Panel header="Account Info" key="1">
                  <pre>{JSON.stringify(this.state.accountInfo, null, 2)}</pre>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}
