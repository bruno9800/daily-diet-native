import { Hero } from "@/components/Hero";
import {
	Button,
	Column,
	Container,
	Content,
	HeaderHero,
	Icon,
	Row,
	Title,
} from "./styles";
import { InfoBox } from "@/components/InfoBox";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { MealStorageDTO } from "@/storage/meals/MealStorageDTO";
import { mealsGetAll } from "@/storage/meals/meals-getAll";
import { mealsGetAllDates } from "@/storage/meals/meals-get-all-dates";
import { mealsGetByDate } from "@/storage/meals/meals-get-by-date";

export function Statistics() {
	const { navigate } = useNavigation();
	const [meals, setMeals] = useState<MealStorageDTO[]>([]);

	function handleNavigateHome() {
		navigate("home");
	}

	async function fetchData() {
		try {
			let storage: MealStorageDTO[] = [];
			const storageDates = await mealsGetAllDates();
			for (const date of storageDates) {
				const mealsByDate = await mealsGetByDate(date);
				storage = [...storage, ...mealsByDate];
			}
			setMeals(storage);
			// todas as refeições ordenadas;
		} catch (error) {
			console.error(error);
		}
	}

	const registeredMeals = meals.length;
	const dietMeals = meals.reduce((acc, meal) => {
		return meal.isDiet ? ++acc : acc;
	}, 0);
	const noDietMeals = registeredMeals - dietMeals;

	const percent = (dietMeals / registeredMeals) * 100;

	const sequence = () => {
		let currentSequence = 0;
		let bestSequence = 0;

		for (const meal of meals) {
			if (!meal.isDiet) currentSequence = 0;
			else {
				++currentSequence;
			}
			if (bestSequence < currentSequence) bestSequence = currentSequence;
		}

		return bestSequence;
	};

	useFocusEffect(
		useCallback(() => {
			fetchData();
		}, [])
	);

	return (
		<Container color="GREEN">
			<HeaderHero>
				<Button onPress={handleNavigateHome}>
					<Icon />
				</Button>
				<Hero
					info={percent}
					describe="das refeições dentro da dieta"
					isPercent
				/>
			</HeaderHero>
			<Content>
				<Title>Estatísticas gerais</Title>
				<Column>
					<InfoBox
						info={sequence()}
						describe="melhor sequência de pratos dentro da dieta"
					/>
					<InfoBox info={registeredMeals} describe="refeições registradas" />
					<Row>
						<InfoBox
							info={dietMeals}
							describe="refeições dentro da dieta"
							bgColor="GREEN"
						/>
						<InfoBox
							info={noDietMeals}
							describe="refeições fora da dieta"
							bgColor="RED"
						/>
					</Row>
				</Column>
			</Content>
		</Container>
	);
}
