import React from "react";
import { Layout } from "antd";
import Header from "../../../components/header"
const { Content, Footer } = Layout;

export default class Mine extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      data: 'Mine to address page.'
    };
  }

  render() {
    return (
      <div>
      <Header title="Mine to address (regtest only)" />
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Inv.es ©2019</Footer>
      </Layout>
      </div>
    );
  }
}
