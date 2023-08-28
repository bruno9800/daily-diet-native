import { useCallback, useState } from "react";
import { MealItem } from "../MealItem";
import { Container, Date } from "./styles";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealsGetByDate } from "@/storage/meals/meals-get-by-date";
import dayjs from "dayjs";
import { MealStorageDTO } from "@/storage/meals/MealStorageDTO";

interface DayListProps {
	date: string;
}

export function DayListItem({ date }: DayListProps) {
	const [meals, setMeals] = useState<MealStorageDTO[]>([]);

	const { navigate } = useNavigation();

	async function fetchMealsByDate() {
		try {
			const storage = await mealsGetByDate(date);
			setMeals([...storage]);
		} catch (error) {
			console.log(error);
		}
	}

	function handleNavigation(name: string, date: dayjs.Dayjs) {
		navigate("meal", {
			name,
			date,
		});
	}

	useFocusEffect(
		useCallback(() => {
			fetchMealsByDate();
		}, [])
	);
	return (
		<Container>
			<Date>{date}</Date>
			<FlatList
				data={meals}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => (
					<MealItem
						timer={item.timer}
						meal={item.name}
						status={item.isDiet}
						onPress={() => handleNavigation(item.name, item.date)}
					/>
				)}
				style={{ width: "100%", gap: 8 }}
			/>
		</Container>
	);
}
