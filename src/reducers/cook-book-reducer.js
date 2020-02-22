import { normalize, schema } from "normalizr";

const recipes = [
  {
    visible: false,
    id: 1,
    description: "hello",
    child: [
      {
        visible: false,
        id: 1.1,
        description: "Stepan",
        child: [
          { visible: false, id: "1-1-1", child: [], description: "Vita" },
          { visible: false, id: "1-1-2", child: [], description: "Lviv" },
          {
            visible: false,
            id: "1-1-3",
            description: "Comming",
            child: [
              {
                description: "Arena Lviv",
                child: [],
                id: "1-2-1",
                visible: false
              },
              {
                description: "Mc Donalds",
                child: [],
                id: "1-2-2",
                visible: false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    visible: false,
    id: 2,
    description: "hello",
    child: [
      {
        visible: false,
        id: 2.1,
        description: "Stepan",
        child: [
          { visible: false, id: "2-1-1", description: "Vita" },
          { visible: false, id: "2-1-2", description: "Lviv" },
          {
            visible: false,
            id: "2-1-3",
            description: "Comming",
            child: [
              { description: "Arena Lviv", id: "2-2-1", visible: false },
              { description: "Mc Donalds", id: "2-2-2", visible: false }
            ]
          }
        ]
      }
    ]
  }
];

const node = new schema.Entity("node");
node.define({
  child: [node]
});
const treeSchema = [node];

const initialState = {
  editingKey: null,
  loading: false,
  error: null,
  recipes: normalize(recipes, treeSchema)
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemId = action.payload;
      const id = Date.now().toString(19);
      const item = state.recipes.entities.node[itemId];
      if (!item.child) {
        item.child = [];
      }
      const updateItem = {
        ...item,
        child: [...item.child, id]
      };
      const newItem = {
        visible: false,
        id,
        child: [],
        description: Date.now().toString(36)
      };
      return {
        ...state,
        recipes: {
          ...state.recipes,
          entities: {
            node: {
              ...state.recipes.entities.node,
              [id]: newItem,
              [itemId]: updateItem
            }
          }
        }
      };
    }
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
        recipes: [action.payload, ...state.recipes]
      };
    case "EDIT_RECIPES": {
      const { id, recipes } = action.payload;
      const newData = [...state.recipes];
      const recipesIndex = state.recipes.findIndex(i => i._id === id);
      const item = newData[recipesIndex];
      newData.splice(recipesIndex, 1, {
        ...item,
        ...recipes
      });
      return {
        ...state,
        recipes: newData
      };
    }

    default:
      return state;
  }
};
