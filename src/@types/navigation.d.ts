import dayjs from "dayjs";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      'new-meal': undefined;
      feedback: {
        isDiet: boolean;
      }
      meal: {
        name: string;
        date: dayjs.Dayjs;
      }
      'meal-updated': {
        name: string;
        date: dayjs.Dayjs;
      }
    }
  }
}