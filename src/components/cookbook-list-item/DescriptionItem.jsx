import React from "react";
import { Descriptions, Input, Form } from "antd";
import DescriptionRecipesHeader from "../description-recipes-header/DescriptionRecipesHeader";
import { connect } from "react-redux";

const { TextArea } = Input;

const DescriptionItem = ({
  description,
  recipesKey,
  ingredients,
  form,
  editingKey,
  howToCook
}) => {
  const { getFieldDecorator } = form;
  return (
    <Descriptions
      column={24}
      bordered
      title={<DescriptionRecipesHeader recipesKey={recipesKey} />}
    >
      {editingKey !== recipesKey ? (
        <React.Fragment>
          <Descriptions.Item span={24} label="Description">
            {description}
          </Descriptions.Item>
          <Descriptions.Item span={24} label="Ingredients">
            {ingredients}
          </Descriptions.Item>
          <Descriptions.Item span={24} label="How to cook">
            {howToCook}
          </Descriptions.Item>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Descriptions.Item span={24} label="Description">
            <Form.Item>
              {getFieldDecorator("description", {
                rules: [
                  { required: true, message: "Please input description!" }
                ]
              })(<TextArea />)}
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item span={24} label="Ingredients">
            <Form.Item>
              {getFieldDecorator("ingredients", {
                rules: [
                  { required: true, message: "Please input ingredients!" }
                ]
              })(<TextArea />)}
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item span={24} label="How to cook">
            <Form.Item>
              {getFieldDecorator("howToCook", {
                rules: [{ required: true, message: "Please input How to cook" }]
              })(<TextArea />)}
            </Form.Item>
          </Descriptions.Item>
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
