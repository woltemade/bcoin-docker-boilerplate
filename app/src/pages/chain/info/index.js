import React from "react";
import { Layout, PageHeader, Progress, Row, Col } from "antd";
// const { Content } = Layout;

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      data: null,
      chainNetwork: process.env.REACT_APP_BCOIN_NETWORK,
      chainProgress: 0.0001,
    };
  }

  componentDidMount() {
    this.getChainState();
    this.timer = setInterval(() => this.getChainState(), 5000);
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
            chainNetwork: `[${data.network}] node`,
            data
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
  progressBar() {
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
  render() {
    let progress = this.progressBar();
    return (
      <div>
      <Layout>
        <PageHeader title="Chain Info" subTitle="" />
        {progress}
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
          </div>
      </Layout>
      </div>
    );
  }
}
