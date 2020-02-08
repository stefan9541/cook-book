import React from "react";
import { Form, Input, Col, Button } from "antd";

const { TextArea } = Input;

const formItem = [
  { name: "Title", type: "input" },
  { name: "Description", type: "text" },
  { name: "Ingredients", type: "text" },
  { name: "HowToCook", type: "text" }
];
const getInput = type => {
  if (type === "text") return <TextArea />;
  return <Input />;
};

const AddNewRecipes = props => {
  const { getFieldDecorator, validateFields } = props.form;
  const handleSumbit = e => {
    validateFields((err, values) => {
      console.log(values);
    });
    e.preventDefault();
  };
  return (
    <Col xl={10} md={14} lg={10}>
      <Form onSubmit={handleSumbit} layout="vertical">
        {formItem.map(({ name, type }) => (
          <Form.Item label={name}>
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

export default Form.create({ name: "add-new-recipes" })(AddNewRecipes);
