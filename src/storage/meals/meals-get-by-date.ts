import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealStorageDTO } from "./MealStorageDTO";
import dayjs from "dayjs";
import { MEAL_COLLECTION } from "../storageConfig";

export async function mealsGetByDate(date: string) {
  try {  
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    const mealsThatDate = meals.filter(meal => {
      const dateToCompare = dayjs(meal.date).format('DD/MM/YYYY');

      return dateToCompare === date;
      
    });
    

    const orderMealsThatDate = mealsThatDate.sort((a, b )=> {
      const timerA = Number(a.timer.hours) * 60 + Number(a.timer.minutes);
      const timerB =  Number(b.timer.hours) * 60 + Number(b.timer.minutes);

      return timerA - timerB;
    })

    return orderMealsThatDate;

  }catch(error) {
    throw error;
  }

}