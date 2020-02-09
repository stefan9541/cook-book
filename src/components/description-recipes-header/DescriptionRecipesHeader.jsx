import React from "react";
import PreviousRecipesVersion from "../previous-recipes-version/PreviousRecipesVersion";
import { Row, Button, Col, Popconfirm } from "antd";
import { connect } from "react-redux";
import { editRecipesKey } from "../../actions/cook-book-actions";

const DescriptionRecipesHeader = ({
  recipesKey,
  editingKey,
  editRecipesKey
}) => {
  const SaveCancelButton = () => (
    <Col>
      <Button type="link">Save</Button>
      <Popconfirm
        onConfirm={() => editRecipesKey(null)}
        title="Sure to cancel?"
      >
        <Button type="link">Cancel</Button>
      </Popconfirm>
    </Col>
  );
  const isEdit = recipesKey === editingKey;
  return (
    <Row justify="space-between" type="flex">
      <p>Recipes description</p>
      <Row type="flex">
        {isEdit ? (
          <SaveCancelButton />
        ) : (
          <React.Fragment>
            <Button
              style={{ marginRight: "15px" }}
              onClick={() => editRecipesKey(recipesKey)}
              icon="edit"
            />
            <PreviousRecipesVersion />
          </React.Fragment>
        )}
      </Row>
    </Row>
  );
};

const mapDispatch = {
  editRecipesKey
};

const mapState = state => {
  return {
    editingKey: state.editingKey
  };
};

export default connect(mapState, mapDispatch)(DescriptionRecipesHeader);
