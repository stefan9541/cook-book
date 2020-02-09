import React from "react";
import { Descriptions, Input, Form } from "antd";
import DescriptionRecipesHeader from "../description-recipes-header/DescriptionRecipesHeader";
import { connect } from "react-redux";

const { TextArea } = Input;

const DescriptionItem = ({
  description,
  ingredients,
  howToCook,
  recipesKey,
  form,
  editingKey
}) => {
  const { getFieldDecorator } = form;
  const renderItems = (...args) => {
    const formItem = ["description", "ingredients", "howToCook"];
    let items = [];
    for (let i = 0; i < 3; i++) {
      let currentItem = formItem[i];
      if (editingKey !== recipesKey) {
        items.push(
          <Descriptions.Item key={currentItem} span={24} label={currentItem}>
            {args[i]}
          </Descriptions.Item>
        );
      } else {
        items.push(
          <Descriptions.Item key={currentItem} span={24} label={currentItem}>
            <Form.Item>
              {getFieldDecorator(currentItem, {
                initialValue: args[i],
                rules: [
                  { required: true, message: `Please input ${currentItem}!` }
                ]
              })(<TextArea autoSize />)}
            </Form.Item>
          </Descriptions.Item>
        );
      }
    }
    return items;
  };

  return (
    <Descriptions
      column={24}
      bordered
      title={<DescriptionRecipesHeader recipesKey={recipesKey} />}
    >
      <React.Fragment>
        {renderItems(description, ingredients, howToCook)}
      </React.Fragment>
      )}
    </Descriptions>
  );
};

const mapState = state => {
  return {
    editingKey: state.editingKey
  };
};

export default connect(mapState)(Form.create()(DescriptionItem));
