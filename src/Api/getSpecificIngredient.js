import supabaseApiService from "./service";

const getSpecificIngredient = async (enteredFilter) => {
  return supabaseApiService
    .from("ingredients")
    .select()
    .eq("title", enteredFilter);
};
export default getSpecificIngredient;
