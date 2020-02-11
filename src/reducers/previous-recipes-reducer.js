const initialState = {
  error: null,
  loading: false,
  visibleList: false,
  prevVersionRecipes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PREVIOUS_RECIPES_VERSION_REQUEST":
      return {
        ...state,
        loading: true,
        prevVersionRecipes: [],
        error: false
      };
    case "PREVIOUS_RECIPES_VERSION_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        prevVersionRecipes: action.payload
      };
    case "PREVIOUS_RECIPES_VERSION_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
