import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const myFooter = props => (
    <Footer style={{ textAlign: "center", position: "relative", bottom: "0", zIndex: "1",
    height: "68px", alignSelf: "center" }}>Inv.es ©2019</Footer>
 );

 export default myFooter
