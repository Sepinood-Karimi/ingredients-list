import supabaseApiService from "./service";

const insertIngredient = async (ingredient) => {
  return await supabaseApiService
    .from("ingredients")
    .insert({ title: ingredient.title, amount: ingredient.amount })
    .select();
};
export default insertIngredient;
