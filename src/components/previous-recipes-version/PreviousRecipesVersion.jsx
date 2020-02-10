import React from "react";
import { Button, Tooltip } from "antd";

const PreviousRecipesVersion = () => {
  return (
    <Tooltip placement="topLeft" title="Добавить задачу">
      <Popover
        placement="leftBottom"
        content={<NewArticleForm />}
        title="Новая задача"
        trigger="click"
        overlayStyle={{ width: "300px" }}
      >
        <Button type="primary">
          <Icon type="unordered-list" />
        </Button>
      </Popover>
    </Tooltip>
  );
};

export default PreviousRecipesVersion;
