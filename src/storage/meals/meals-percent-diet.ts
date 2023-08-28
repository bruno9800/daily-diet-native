import { mealsGetAll } from "./meals-getAll";

export async function mealsPercentDiet() {
  try {
    const meals = await mealsGetAll();

    const mealsDiet = meals.reduce((acc, meal) => {
      if(meal.isDiet) {
        return acc + 1;
      }
      return acc;
    }, 0);

    const percent = (mealsDiet / meals.length) * 100;

    return percent;

  }catch (error ){
    throw error;
  }
}