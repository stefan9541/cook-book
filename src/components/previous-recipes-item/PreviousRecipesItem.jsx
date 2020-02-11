import React, { useState } from "react";
import { List } from "antd";
import { connect } from "react-redux";
import RecipeItemModal from "./RecipeItemModal";

import "./previous-recipes-item.css";

const PreviousRecipesItem = ({ recipes, closeList }) => {
  const [recipe, setRecipe] = useState({});
  const [visible, setVisible] = useState(false);

  return (
    <React.Fragment>
      <RecipeItemModal
        recipe={recipe}
        visible={visible}
        setVisible={setVisible}
      />
      <List
        size="small"
        bordered
        className="previous-recipes-list"
        dataSource={recipes}
        renderItem={item => (
          <List.Item
            onClick={() => {
              setRecipe(item);
              setVisible(true);
              closeList(false);
            }}
            className="prev-recipes-item"
          >
            {item.title}
          </List.Item>
        )}
      />
    </React.Fragment>
  );
};

const mapState = state => {
  return {
    recipes: state.previousRecipesReducer.prevVersionRecipes
  };
};

export default connect(mapState)(PreviousRecipesItem);
