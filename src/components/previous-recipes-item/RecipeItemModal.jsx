import React from "react";
import { Modal, Descriptions } from "antd";

const RecipeItemModal = ({ recipe, setVisible, visible }) => {
  const items = [
    { label: "Description", text: recipe["description"] },
    { label: "Ingredients", text: recipe["ingredients"] },
    { label: "How to cook", text: recipe["howToCook"] }
  ];
  return (
    <Modal
      title={recipe.title}
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={() => setVisible(false)}
    >
      <Descriptions column={24} layout="vertical" bordered>
        {items.map(({ label, text }) => (
          <Descriptions.Item key={label} label={label} span={24}>
            {text}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </Modal>
  );
};

export default RecipeItemModal;
