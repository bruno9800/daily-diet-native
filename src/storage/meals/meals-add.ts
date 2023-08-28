import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealStorageDTO } from "./MealStorageDTO";
import { mealsGetByDate } from "./meals-get-by-date";
import dayjs from 'dayjs'
import { MEAL_COLLECTION } from "../storageConfig";
import { mealsGetAll } from "./meals-getAll";


export async function mealsAdd(newMeal: MealStorageDTO) {
  try {
    const dateFormat = dayjs(newMeal.date).format('DD/MM/YYYY');
    const storageByDate = await mealsGetByDate(dateFormat);
    
    const mealAlreadyExists = storageByDate.some((meal) => meal.name === newMeal.name);

    if(mealAlreadyExists) {
      throw new Error('Você já adicionou essa refeição nesse dia');
    }

    const storageAll = await mealsGetAll();

    const updateStorage = [...storageAll ,newMeal];

   await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updateStorage));

  }catch(error) {
    throw error;
  }
}