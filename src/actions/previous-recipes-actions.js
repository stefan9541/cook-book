import RecipesApi from "../api/recipes-api";
const { getPreviousRecipes } = new RecipesApi();

const previousRecipesVersionRequest = () => {
  return {
    type: "PREVIOUS_RECIPES_VERSION_REQUEST"
  };
};
const previousRecipesVersionSuccess = recipes => {
  return {
    type: "PREVIOUS_RECIPES_VERSION_SUCCESS",
    payload: recipes
  };
};
const previousRecipesVersionFailure = err => {
  return {
    type: "PREVIOUS_RECIPES_VERSION_FAILURE",
    payload: err
  };
};

export const getPreviousRecipe = id => async dispatch => {
  try {
    dispatch(previousRecipesVersionRequest());
    const { data } = await getPreviousRecipes(id);
    dispatch(previousRecipesVersionSuccess(data));
  } catch (error) {
    dispatch(previousRecipesVersionFailure(error));
  }
};
