import React from "react";
import { Collapse } from "antd";
import CookBookListItemHeader from "./CookBookListItemHeader";
import DescriptionItem from "./DescriptionItem";
import "./CookbookListItem.css";

const { Panel } = Collapse;

const CookbookListItem = ({ recipes }) => {
  return (
    <Collapse accordion>
      {recipes.map(
        ({ title, id, ingredients, howToCook, createdAt, description }) => {
          return (
            <Panel
              key={title + createdAt}
              header={
                <CookBookListItemHeader createdAt={createdAt} title={title} />
              }
            >
              <DescriptionItem
                recipesKey={id}
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
