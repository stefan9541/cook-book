import React from "react";
import CookbookListItem from "../cookbook-list-item/CookbookListItem";
import { connect } from "react-redux";
import { Col } from "antd";

const CookbookList = ({ recipes }) => {
  return (
    <Col>
      <CookbookListItem recipes={recipes} />
    </Col>
  );
};

const mapState = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapState)(CookbookList);
