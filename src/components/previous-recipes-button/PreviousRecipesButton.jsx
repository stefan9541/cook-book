import React, { useState } from "react";
import { Button, Tooltip, Spin, Result, Popover, Icon } from "antd";
import { connect } from "react-redux";
import { getPreviousRecipe } from "../../actions/previous-recipes-actions";
import PreviousRecipesItem from "../previous-recipes-item/PreviousRecipesItem";

const PreviousRecipesButton = ({
  recipesKey,
  loading,
  error,
  getPreviousRecipe
}) => {
  const [visible, setVisible] = useState(false);
  let content;
  const handleGetPrevRecipes = () => {
    if (visible) return;
    getPreviousRecipe(recipesKey);
  };
  if (loading) {
    content = <Spin style={{ width: "100%" }} />;
  }
  if (error) {
    content = (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    );
  }
  if (!error && !loading)
    content = <PreviousRecipesItem closeList={setVisible} />;
  return (
    <Tooltip placement="topLeft" title="Previous recipes">
      <Popover
        placement="leftBottom"
        onVisibleChange={visible => setVisible(visible)}
        visible={visible}
        content={content}
        title="Previous recipes Version"
        trigger="click"
        overlayStyle={{ width: "300px" }}
      >
        <Button onClick={handleGetPrevRecipes}>
          <Icon type="unordered-list" />
        </Button>
      </Popover>
    </Tooltip>
  );
};

const mapState = state => {
  return {
    loading: state.previousRecipesReducer.loading,
    error: state.previousRecipesReducer.error,
    visibleList: state.previousRecipesReducer.visibleList
  };
};

const mapDispatch = {
  getPreviousRecipe
};

export default connect(mapState, mapDispatch)(PreviousRecipesButton);
