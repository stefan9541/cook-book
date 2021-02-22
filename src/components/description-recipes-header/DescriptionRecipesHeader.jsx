import React, { useContext } from "react";
import PreviousRecipesButton from "../previous-recipes-button/PreviousRecipesButton";
import { Row, Button, Col, Popconfirm } from "antd";
import { connect } from "react-redux";
import { editRecipesKey, editRecipes } from "../../actions/cook-book-actions";
import FormContext from "../../context/form-context";

const DescriptionRecipesHeader = ({
  recipesKey,
  editingKey,
  editRecipes,
  editRecipesKey
}) => {
  // use context
  const form = useContext(FormContext);
  const SaveCancelButton = () => (
    <Col>
      <Button onClick={() => editRecipes(recipesKey, form)} type="link">
        Save
      </Button>
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
            <PreviousRecipesButton recipesKey={recipesKey} />
          </React.Fragment>
        )}
      </Row>
    </Row>
  );
};
const mapDispatch = {
  editRecipesKey,
  editRecipes
};

const mapState = state => {
  return {
    editingKey: state.cookBookReducer.editingKey
  };
};

export default connect(mapState, mapDispatch)(DescriptionRecipesHeader);
