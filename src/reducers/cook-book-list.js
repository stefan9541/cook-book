const initialState = {
  editingKey: null,
  loading: false,
  error: null,
  prevVersionRecipes: [
    {
      title: "chicken soup",
      description: "very beautiful chicken soup",
      ingredients:
        "500ml 100gr tomato, 200gr parrot and 100g cabagge, water, salt",
      howToCook: "boil , cook for 10 minutes",
      parentId: 3,
      createdAt: Date.now()
    }
  ],
  recipes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_RECIPES_KEY":
      return {
        ...state,
        editingKey: action.payload
      };
    case "GET_RECIPES_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "GET_RECIPES_SUCCESS":
      return {
        ...state,
        recipes: action.payload,
        loading: false,
        error: null
      };
    case "GET_RECIPES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case "ADD_NEW_RECIPES":
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };

    default:
      return state;
  }
};
