import React from "react";
import { Layout } from "antd";
import Header from "../../../components/header"
const { Content, Footer } = Layout;

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
      <Header title="Chain Info" />
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