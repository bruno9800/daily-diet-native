import dayjs from "dayjs";
import { mealsGetAll } from "./meals-getAll";

export async function mealsGetByNameAndDate(name: string, date: dayjs.Dayjs ) {
  try {
    const storage = await mealsGetAll();

    const meal = storage.find(meal => meal.date === date && meal.name === name);
    if(!meal) {
      throw Error('Usuário não existe');
    }
    return meal;

  }catch(error) {
    throw error;
  }
} 