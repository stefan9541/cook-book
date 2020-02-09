import React from "react";
import { Collapse } from "antd";
import CookBookListItemHeader from "./CookBookListItemHeader";
import EditableItem from "./EditableItem";
import "./CookbookListItem.css";

const { Panel } = Collapse;

const CookbookListItem = ({ recipes }) => {
  return (
    <Collapse accordion>
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

export default CookbookListItem;
