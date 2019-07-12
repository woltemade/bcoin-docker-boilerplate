import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const myHeader = props => (
    <Header style={{ background: '#fff', padding: 16 }}>
       <h1>{props.title}</h1>
    </Header>
 );

 export default myHeader