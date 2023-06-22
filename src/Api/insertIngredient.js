import supabaseApiService from "./service";

const insertIngredient = async (ingredient) => {
  return supabaseApiService
    .from("ingredients")
    .insert({ title: ingredient.title, amount: ingredient.amount })
    .select();
};
export default insertIngredient;
