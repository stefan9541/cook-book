import React from "react";
import { Row, Col } from "antd";
import CookbookList from "../cookbook-list/CookbookList";

import "antd/dist/antd.css";
import "./app.css";

function App() {
  return (
    <Row justify="center" type="flex">
      <Col span={20}>
        <CookbookList />
      </Col>
    </Row>
  );
}

export default App;
