import React from "react";
import { Tabs } from "antd";
import CookbookList from "../cookbook-list";
import AddNewRecipes from "../add-new-recipes/AddNewRecipes";
const { TabPane } = Tabs;

const MenuTabs = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Recipes List" key="1">
        <CookbookList />
      </TabPane>
      <TabPane tab="Add new recipes" key="2">
        <AddNewRecipes />
      </TabPane>
    </Tabs>
  );
};

export default MenuTabs;
