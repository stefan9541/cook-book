const initialState = {
  editingKey: null,
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
  recipes: [
    {
      title: "chicken soup",
      id: 3,
      description: "beautiful chicken soup",
      ingredients: "200ml water, salt",
      howToCook: "boil water and salt, cook for 10 minutes",
      createdAt: Date.now()
    },
    {
      title: "Chicken Salat",
      description: "beautiful chicken soup",
      id: 33,
      ingredients: "200ml water, salt",
      howToCook: "boil water and salt, cook for 10 minutes",
      createdAt: Date.now()
    },
    {
      title: "baked turkey",
      id: 333,
      description: "beautiful chicken soup",
      ingredients: "200ml water, salt",
      howToCook: "boil water and salt, cook for 10 minutes",
      createdAt: Date.now()
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_RECIPES_KEY":
      console.log(action.payload);
      return {
        ...state,
        editingKey: action.payload
      };

    default:
      return state;
  }
};
