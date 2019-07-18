import React from "react";
import { Layout, PageHeader, Select, Input, Row, Col } from "antd";
// const { Content } = Layout;

const { Option } = Select;
const { Search } = Input;

export default class Mine extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      data: "Mine to address page.",
      blocks: 50,
      address: ''
    };
    console.log(JSON.stringify(props, null, 4));
  }

  handleBlocksChange = blocks => {
    this.setState({
      blocks
    });
  };

  handleAddressChange = address => {
    this.setState({
      address
    });
    this.mineBlocks(this.state.blocks, address);
  };

  mineBlocks(blocks, address) {
    fetch(`http://localhost:3001/chain/mine?blocks=${blocks}&address=${address}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <Layout>
          <PageHeader
            title="Mine blocks to address"
            subTitle="Regtest network only."
          />
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Row>
              <Col span={2}>
                <Select
                  defaultValue="50"
                  onChange={this.handleBlocksChange}
                  size="large"
                >
                  <Option value="50">50</Option>
                  <Option value="100">100</Option>
                </Select>
              </Col>
              <Col span={22}>
                <Search
                  placeholder="Enter Bitcoin Address:"
                  enterButton="Mine"
                  size="large"
                  onSearch={value => this.handleAddressChange(value)}
                />
              </Col>
            </Row>
          </div>
        </Layout>
      </div>
    );
  }
}
