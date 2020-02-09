import RecipesApi from "../api/recipes-api";
import { message } from "antd";
const { getRecipes, createNewRecipes } = new RecipesApi();

export const editRecipesKey = key => {
  return {
    type: "EDIT_RECIPES_KEY",
    payload: key
  };
};

const getRecipesRequest = () => {
  return {
    type: "GET_RECIPES_REQUEST"
  };
};

const getRecipesSuccess = recipes => {
  return {
    type: "GET_RECIPES_SUCCESS",
    payload: recipes
  };
};

const getRecipesFailure = err => {
  return {
    type: "GET_RECIPES_FAILURE",
    payload: err
  };
};

export const fetchRecipes = () => async dispatch => {
  dispatch(getRecipesRequest());
  try {
    const { data } = await getRecipes();
    dispatch(getRecipesSuccess(data));
  } catch (error) {
    dispatch(getRecipesFailure(error));
  }
};

const addNewRecipes = recipes => {
  return {
    type: "ADD_NEW_RECIPES",
    payload: recipes
  };
};

export const newRecipes = form => dispatch => {
  form.validateFields(async (err, values) => {
    try {
      if (err) return;
      const { data } = await createNewRecipes(values);
      dispatch(addNewRecipes(data));
      message.success("Recipes successfully added");
      form.resetFields();
    } catch (error) {
      message.error("Something get wrong, plz try again");
    }
  });
};

const editRecipes = recipes => {};
