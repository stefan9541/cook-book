import React, { useEffect } from "react";
import CookbookListItem from "../cookbook-list-item/CookbookListItem";
import { connect } from "react-redux";
import { Col, Result, Spin } from "antd";
import { fetchRecipes } from "../../actions/cook-book-actions";

const CookbookList = ({ recipes, fetchRecipes, loading, error }) => {
  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) {
    return <Spin style={{ width: "100%" }} />;
  }

  if (error) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    );
  }

  return (
    <Col>
      <CookbookListItem recipes={recipes} />
    </Col>
  );
};

const mapDispatch = {
  fetchRecipes
};

const mapState = state => {
  return {
    recipes: state.cookBookReducer.recipes,
    error: state.cookBookReducer.error,
    loading: state.cookBookReducer.loading
  };
};

export default connect(mapState, mapDispatch)(CookbookList);
