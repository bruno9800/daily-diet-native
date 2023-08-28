import { Container, GradientOverlay, Title } from "./styles";
import { Header } from "@/components/Header";
import { PercentBox } from "./components/PercentBox";
import { Button } from "@/components/Button";
import Plus from "phosphor-react-native/src/icons/Plus";
import { DayListItem } from "./components/DayListItem";
import { FlatList } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealsGetAllDates } from "@/storage/meals/meals-get-all-dates";
import { mealsPercentDiet } from "@/storage/meals/meals-percent-diet";

export function Home() {
	const [dates, setDates] = useState<string[]>([]);
	const [percent, setPercent] = useState<number>(0);

	const { navigate } = useNavigation();

	function handleNavigationNewMeal() {
		navigate("new-meal");
	}

	async function fetchDates() {
		try {
			const storage = await mealsGetAllDates();

			setDates([...storage]);
		} catch (error) {
			console.log(error);
		}
	}

	async function fetchPercent() {
		try {
			const percentValue = await mealsPercentDiet();
			setPercent(percentValue);
		} catch (error) {
			console.log(error);
		}
	}

	useFocusEffect(
		useCallback(() => {
			fetchDates();
			fetchPercent();
		}, [])
	);

	return (
		<>
			<Container>
				<Header />
				<PercentBox
					describe="das refeições dentro da dieta"
					info={percent}
					isPercent
					type={percent < 50 ? "SECONDARY" : "PRIMARY"}
				/>
				<Title>Refeições</Title>
				<Button.Root onPress={handleNavigationNewMeal}>
					<Plus size={18} color="white" />
					<Button.Text text="Nova refeição" />
				</Button.Root>

				<FlatList
					data={dates}
					keyExtractor={(item) => item}
					renderItem={({ item }) => <DayListItem date={item} />}
					style={{
						marginTop: 32,
					}}
					contentContainerStyle={[
						{ gap: 32, paddingBottom: 62 },
						dates.length === 0 && { flex: 1 },
					]}
					showsVerticalScrollIndicator={false}
				/>
			</Container>
			<GradientOverlay colors={[]} pointerEvents="none" />
		</>
	);
}
