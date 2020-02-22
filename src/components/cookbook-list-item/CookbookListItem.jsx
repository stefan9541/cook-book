import React from "react";
import { Collapse, Button } from "antd";
import CookBookListItemHeader from "./CookBookListItemHeader";
import EditableItem from "./EditableItem";
import "./CookbookListItem.css";
import { connect } from "react-redux";
import { editRecipesKey, addItem } from "../../actions/cook-book-actions";

const { Panel } = Collapse;

const CookbookListItem = ({ recipes, editRecipesKey, addItem }) => {
  const data = recipes.entities.node;

  function renderItem(arrayOfItems) {
    return arrayOfItems.map(elem => {
      const item = data[elem];
      const { description, child, id } = item;
      return (
        <div key={`${description}${id}`} style={{ padding: "0 0 0 10px" }}>
          <p className="tree-list-item">
            {`${description} ${id}`}
            <span className="tree-list-item-btn">
              <Button onClick={() => addItem(id)} type="primary" size="small">
                add Item
              </Button>
            </span>
          </p>
          {child && renderItem(child)}
        </div>
      );
    });
  }
  return (
    <div>
      {recipes.result.map(item => {
        const currentItem = data[item];
        const { description, child, id } = currentItem;
        return (
          <div key={`${description}${id}`}>
            <p className="tree-list-item">
              {description}
              <span className="tree-list-item-btn">
                <Button onClick={() => addItem(id)} type="primary" size="small">
                  add Item
                </Button>
              </span>
            </p>
            {child && renderItem(child)}
          </div>
        );
      })}
    </div>
    // </Collapse>
  );
};
const mapDispatch = {
  editRecipesKey,
  addItem
};

export default connect(null, mapDispatch)(CookbookListItem);
