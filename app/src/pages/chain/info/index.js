import React from "react";
import { Layout, PageHeader } from "antd";
// const { Content } = Layout;

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/chain/info")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    return (
      <div>
      <Layout>
        <PageHeader title="Chain Info" subTitle="" />
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
          </div>
      </Layout>
      </div>
    );
  }
}
