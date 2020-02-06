const initialState = {
  recipes: [
    {
      title: "chicken soup",
      description: "beautiful chicken soup",
      ingredients: "200ml water, salt",
      howToCook: "boil water and salt, cook for 10 minutes",
      createdAt: Date.now()
    },
    {
      title: "Chicken Salata",
      description: "beautiful chicken soup",
      ingredients: "200ml water, salt",
      howToCook: "boil water and salt, cook for 10 minutes",
      createdAt: Date.now()
    },
    {
      title: "baked turkey",
      description: "beautiful chicken soup",
      ingredients: "200ml water, salt",
      howToCook: "boil water and salt, cook for 10 minutes",
      createdAt: Date.now()
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "Hello":
      return {
        ...state
      };

    default:
      return state;
  }
};
