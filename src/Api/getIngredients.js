import supabaseApiService from "./service";

const getIngredients = async () => {
  return await supabaseApiService.from("ingredients").select();
};
export default getIngredients();
