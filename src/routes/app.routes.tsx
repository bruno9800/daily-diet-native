import { FeedBackDiet } from "@/screens/FeedBackDiet";
import { Home } from "@/screens/Home";
import { Meal } from "@/screens/Meal";
import { MealUpdate } from "@/screens/MealUpdate";
import { NewMeal } from "@/screens/NewMeal";
import { Statistics } from "@/screens/Statistics";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
	const { COLORS } = useTheme();
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				navigationBarColor: COLORS.GRAY_500,
				//navigationBarHidden: true,
			}}
		>
			<Screen name="home" component={Home} />
			<Screen name="statistics" component={Statistics} />
			<Screen name="new-meal" component={NewMeal} />
			<Screen name="feedback" component={FeedBackDiet} />
			<Screen name="meal" component={Meal} />
			<Screen name="meal-updated" component={MealUpdate} />
		</Navigator>
	);
}
