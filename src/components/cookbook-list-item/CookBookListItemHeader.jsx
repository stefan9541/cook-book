import React from "react";
import { Col, Row } from "antd";
import moment from "moment";

const CookBookListItemHeader = ({ title, createdAt }) => {
  const date = moment(createdAt).fromNow();
  return (
    <Row className="cook-book-item-header" type="flex">
      <Col>{title}</Col>
      <Col>{date}</Col>
    </Row>
  );
};

export default CookBookListItemHeader;
