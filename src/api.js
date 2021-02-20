import axios from "axios";

const api = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
});

export const randomapi = {
  randomAlcohol: () => api.get("random.php"),
};

export const searchapi = {
  searchCocktailName: (name) =>
    api.get("search.php", { params: { s: encodeURIComponent(name) } }),
  searchIngredientName: (name) =>
    api.get("search.php", { params: { i: encodeURIComponent(name) } }),
};

export const lookupapi = {
  lookupCocktail: (id) => api.get("lookup.php", { params: { i: id } }),
  lookupIngredient: (id) => api.get("lookup.php", { params: { iid: id } }),
};
