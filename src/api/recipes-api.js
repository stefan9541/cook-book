import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8080/api"
});

class RecipesApi {
  getRecipes() {
    return axios.get("/recipes");
  }
}

export default RecipesApi;
