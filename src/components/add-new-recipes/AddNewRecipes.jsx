import React from "react";
import { Form, Input, Col, Button } from "antd";
import { connect } from "react-redux";
import { newRecipes } from "../../actions/cook-book-actions";

const { TextArea } = Input;

const formItem = [
  { name: "title", label: "Title", type: "input" },
  { name: "description", label: "Description", type: "text" },
  { name: "ingredients", label: "Ingredients", type: "text" },
  { name: "howToCook", label: "How to cook", type: "text" }
];
const getInput = type => {
  if (type === "text") return <TextArea autoSize />;
  return <Input />;
};

const AddNewRecipes = ({ form, newRecipes }) => {
  const { getFieldDecorator } = form;
  const handleSumbit = async e => {
    e.preventDefault();
    await newRecipes(form);
  };
  return (
    <Col xl={10} md={14} lg={10}>
      <Form onSubmit={handleSumbit} layout="vertical">
        {formItem.map(({ name, type, label }) => (
          <Form.Item key={name} label={label}>
            {getFieldDecorator(name, {
              rules: [
                {
                  required: true,
                  whitespace: true,
                  message: `Please input your ${name}!`
                }
              ]
            })(getInput(type))}
          </Form.Item>
        ))}
        <Button type="primary" htmlType="submit">
          Add recipes
        </Button>
      </Form>
    </Col>
  );
};

const mapDispatch = {
  newRecipes
};

export default connect(
  null,
  mapDispatch
)(Form.create({ name: "add-new-recipes" })(AddNewRecipes));
