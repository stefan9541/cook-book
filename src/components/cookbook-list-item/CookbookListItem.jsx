import React from "react";
import { Collapse, Descriptions } from "antd";
import CookBookListItemHeader from "./CookBookListItemHeader";

import "./CookbookListItem.css";
const { Panel } = Collapse;

const CookbookListItem = ({ recipes }) => {
  return (
    <Collapse accordion>
      {recipes.map(
        ({ title, ingredients, howToCook, createdAt, description }) => {
          return (
            <Panel
              key={title + createdAt}
              header={
                <CookBookListItemHeader createdAt={createdAt} title={title} />
              }
            >
              <Descriptions column={24} bordered title="Recipes description">
                <Descriptions.Item span={24} label="Description">
                  {description}
                </Descriptions.Item>
                <Descriptions.Item span={24} label="Ingredients">
                  {ingredients}
                </Descriptions.Item>
                <Descriptions.Item span={24} label="How to cook">
                  {howToCook}
                  {howToCook}
                  {howToCook}
                </Descriptions.Item>
              </Descriptions>
            </Panel>
          );
        }
      )}
    </Collapse>
  );
};

export default CookbookListItem;
