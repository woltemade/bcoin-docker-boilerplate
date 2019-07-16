import React from "react";
import { Layout, Icon } from "antd";
import "./header.css";

const { Header } = Layout;

const myHeader = props => (
  <Header style={{ background: "#fff", padding: 16 }}>
    <h1>
      <Icon
        className="trigger"
        type={props.collapsed ? "menu-unfold" : "menu-fold"}
        onClick={props.toggle}
      />
      Bcoin Test App
    </h1>
  </Header>
);
export default myHeader;
