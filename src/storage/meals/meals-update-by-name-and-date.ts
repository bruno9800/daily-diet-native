import dayjs from "dayjs";
import { mealsGetAll } from "./meals-getAll";
import { MealStorageDTO } from "./MealStorageDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";

export async function mealsUpdateByNameAndDate(name: string, date: dayjs.Dayjs, updateMeal: MealStorageDTO ) {
  try {
    const storage = await mealsGetAll();

    console.log(storage.length);
    const meals = storage.filter(meal => meal.date !== date && meal.name !== name);

    const updateMeals = [...meals, updateMeal];

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updateMeals));


  }catch(error) {
    throw error;
  }
} 