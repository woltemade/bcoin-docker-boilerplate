import React from "react";
import { Layout, PageHeader, Input } from "antd";
const { Content } = Layout;

const { Search } = Input;

export default class Mine extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      data: "Mine to address page."
    };
    console.log(JSON.stringify(props, null, 4));
  }

  render() {
    return (
      <div>
        <Layout>
            <PageHeader
              title="Mine 100 blocks to address"
              subTitle="Regtest network only."
            />
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Search
                placeholder="Enter Bitcoin Address:"
                enterButton="Mine"
                size="large"
                onSearch={value => console.log(value)}
              />
            </div>
        </Layout>
      </div>
    );
  }
}
