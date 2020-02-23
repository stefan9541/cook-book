import React from "react";
import { Collapse } from "antd";
import CookBookListItemHeader from "./CookBookListItemHeader";
import EditableItem from "./EditableItem";
import "./CookbookListItem.css";
import { connect } from "react-redux";
import { editRecipesKey } from "../../actions/cook-book-actions";

const { Panel } = Collapse;

const CookbookListItem = ({ recipes, editRecipesKey }) => {
  return (
    <Collapse
      onChange={() =>
        setTimeout(() => {
          editRecipesKey(null);
        }, 150)
      }
      accordion
    >
      {recipes.map(
        ({ title, _id, ingredients, howToCook, createdAt, description }) => {
          return (
            <Panel
              key={_id}
              header={
                <CookBookListItemHeader createdAt={createdAt} title={title} />
              }
            >
              <EditableItem
                recipesKey={_id}
                description={description}
                ingredients={ingredients}
                howToCook={howToCook}
              />
            </Panel>
          );
        }
      )}
    </Collapse>
  );
};
const mapDispatch = {
  editRecipesKey
};

export default connect(null, mapDispatch)(CookbookListItem);
