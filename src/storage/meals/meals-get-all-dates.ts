import dayjs from "dayjs";
import { mealsGetAll } from "./meals-getAll";

export async function mealsGetAllDates() {
  try {
    const meals = await mealsGetAll();

    const dates = meals.map((meal) => dayjs(meal.date));

    const sortDates = dates.sort( ( a, b ) => {
      const dateA = dayjs(a);
      const dateB = dayjs(b);

      return dateA.isAfter(dateB) ? 1: -1;
    })

    const strDates = sortDates.map( date => dayjs(date).format('DD/MM/YYYY'));

   

    return [...new Set(strDates)];
    
  }catch (error) {
    throw error;
  }
}