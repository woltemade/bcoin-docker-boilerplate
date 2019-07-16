import React from "react";
import { Layout, PageHeader, Select, Spin } from "antd";

const { Option } = Select;

export default class WalletList extends React.Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
  }

  state = {
    data: [],
    value: [],
    walletInfo: [],
    fetching: false
  };

  fetchWallets() {
    this.setState({ data: [], fetching: true });
    fetch("http://localhost:3001/wallet/list")
      .then(response => response.json())
      .then(data => this.setState({ data, fetching: false }));
  }

  fetchWalletInfo = value => {
    console.log("getting wallets info for", value);
    this.setState({ walletInfo: [], fetching: true });
    fetch(`http://localhost:3001/wallet/info?walletId=${value}`)
      .then(response => response.json())
      .then(walletInfo => this.setState({ walletInfo, fetching: false }));
  };

  handleChange = value => {
    this.setState({
      value,
      fetching: false
    });
    this.fetchWalletInfo(value.label);
  };
  componentDidMount() {
    this.fetchWallets();
  }
  render() {
    const { fetching, data, value } = this.state;
    return (
      <Layout>
        <PageHeader title="List of wallets" subTitle="" />
        <div style={{ padding: 24, background: "#fff", minHeight: 495 }}>
          <Select
            labelInValue
            value={value}
            placeholder="Select a wallet"
            notFoundContent={fetching ? <Spin size="small" /> : null}
            filterOption={false}
            onSearch={this.fetchWallets}
            onChange={this.handleChange}
            style={{ width: "100%" }}
          >
            {data.map(d => (
              <Option key={d.key}>{d.value}</Option>
            ))}
          </Select>
          <pre>{JSON.stringify(this.state.walletInfo, null, 2)}</pre>
        </div>
      </Layout>
    );
  }
}
