import supabaseApiService from "./service";

const removeIngredient = async (ingredientId) => {
  return supabaseApiService.from("ingredients").delete().eq("id", ingredientId);
};
export default removeIngredient;
