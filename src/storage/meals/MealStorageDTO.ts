import dayjs from "dayjs";

export interface MealStorageDTO {
  name: string;
  description: string;
  date: dayjs.Dayjs;
  timer: {
    hours: string;
    minutes: string;
  }
  isDiet: boolean;
}