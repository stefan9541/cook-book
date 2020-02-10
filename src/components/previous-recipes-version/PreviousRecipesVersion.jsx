import React from "react";
import { Button, Tooltip } from "antd";

const PreviousRecipesVersion = () => {
  return (
    <Tooltip title="Previous version">
      <Button icon="unordered-list" />
    </Tooltip>
  );
};

export default PreviousRecipesVersion;
