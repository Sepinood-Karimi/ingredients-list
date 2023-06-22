import supabaseApiService from "./service";

const getIngredients = async () => {
  return supabaseApiService.from("ingredients").select();
};
export default getIngredients();
