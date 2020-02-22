import RecipesApi from "../api/recipes-api";
import { message } from "antd";
const { getRecipes, updateRecipes, createNewRecipes } = new RecipesApi();

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
  try {
    form.validateFields(async (err, values) => {
      if (err) return;
      const { data } = await createNewRecipes(values);
      dispatch(addNewRecipes(data));
      message.success("Recipes successfully added");
      form.resetFields();
    });
  } catch (error) {
    message.error("Something get wrong, plz try again");
  }
};

const editRecipesAction = (id, recipes) => {
  return {
    type: "EDIT_RECIPES",
    payload: { id, recipes }
  };
};

export const editRecipes = (id, form) => (dispatch, getState) => {
  const {
    cookBookReducer: { recipes }
  } = getState();
  const currentRecipes = recipes.find(i => i._id === id);
  form.validateFields(async (err, values) => {
    try {
      if (err) return;
      const isValueEqual = Object.entries(values).every(i => {
        const [key, value] = i;
        return value.trim() === currentRecipes[key].trim();
      });
      if (isValueEqual) {
        return dispatch(editRecipesKey(null));
      }

      await updateRecipes(id, values);
      message.success("Recipes successfully edited");
      dispatch(editRecipesAction(id, values));
      dispatch(editRecipesKey(null));
    } catch (error) {
      message.error("Something get wrong, plz try again");
      dispatch(editRecipesKey(null));
    }
  });
};

export const addItem = id => {
  console.log(id);
  return {
    type: "ADD_ITEM",
    payload: id
  };
};
