import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8080/api"
});

class RecipesApi {
  getRecipes() {
    return axios.get("/recipes");
  }
  createNewRecipes(recipes) {
    return axios.post("/recipes", { recipes });
  }
  updateRecipes(id, recipes) {
    return axios.put(`/recipes/${id}`, recipes);
  }
}

export default RecipesApi;
