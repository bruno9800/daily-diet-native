import { HeaderMeal } from "@/components/HeaderMeal";
import { Container, Content, Info, Subtitle, Strong, Actions } from "./styles";
import { useCallback, useState } from "react";
import {
	useFocusEffect,
	useNavigation,
	useRoute,
} from "@react-navigation/native";
import dayjs from "dayjs";
import { mealsGetByNameAndDate } from "@/storage/meals/meals-get-by-name-and-date";
import { MealStorageDTO } from "@/storage/meals/MealStorageDTO";
import { Button } from "@/components/Button";
import PencilSimpleLine from "phosphor-react-native/src/icons/PencilSimpleLine";
import Trash from "phosphor-react-native/src/icons/Trash";
import { Alert } from "react-native";
import { Loading } from "@/components/Loading";
import { Tag } from "./Tag";
import { Modal } from "./Modal";
import { mealsRemoveByNameAndDate } from "@/storage/meals/meals-remove-by-name-and-date";

interface Params {
	name: string;
	date: dayjs.Dayjs;
}

export function Meal() {
	const [meal, setMeal] = useState<MealStorageDTO | null>();
	const [modalOpen, setModalOpen] = useState(false);

	const { navigate } = useNavigation();
	const { params } = useRoute();
	const { date: dateMeal, name: nameMeal } = params as Params;

	async function fetchMeal() {
		try {
			const storage = await mealsGetByNameAndDate(nameMeal, dateMeal);
			setMeal(storage);
		} catch (error) {
			console.error(error);
		}
	}

	function handleNavigateToUpdateMeal() {
		navigate("meal-updated", {
			date: dateMeal,
			name: nameMeal,
		});
	}

	function handleRemoveMeal() {
		setModalOpen(true);
		console.log("modal");
	}

	async function handleDeleteMeal() {
		await mealsRemoveByNameAndDate(nameMeal, dateMeal);
		navigate("home");
	}

	function handleCloseModal() {
		setModalOpen(false);
	}

	const dateString = dayjs(meal?.date).format("DD/MM/YYYY");

	useFocusEffect(
		useCallback(() => {
			fetchMeal();
		}, [])
	);
	return (
		<>
			<Container type={meal?.isDiet ? "GOOD" : "BAD"}>
				<HeaderMeal title="Refeição" />
				<Content>
					<Info>
						{meal ? (
							<>
								<Strong type="LG">{meal.name}</Strong>
								<Subtitle>{meal.description}</Subtitle>

								<Strong type="SM">Data e hora</Strong>
								<Subtitle>
									{dateString} às {meal.timer.hours}:{meal.timer.minutes}
								</Subtitle>
								<Tag status={meal.isDiet} />
							</>
						) : (
							<Loading />
						)}
					</Info>
					<Actions>
						<Button.Root onPress={handleNavigateToUpdateMeal}>
							<PencilSimpleLine color="white" size={18} />
							<Button.Text text="Editar refeição" />
						</Button.Root>
						<Button.Root
							style={{
								backgroundColor: "white",
								borderColor: "#1B1D1E",
								borderWidth: 1,
								borderStyle: "solid",
							}}
							onPress={handleRemoveMeal}
						>
							<Trash color="black" size={18} />
							<Button.Text text="Excluir refeição" type="SECONDARY" />
						</Button.Root>
					</Actions>
				</Content>
			</Container>

			{modalOpen ? (
				<Modal onDelete={handleDeleteMeal} cancel={handleCloseModal} />
			) : (
				<></>
			)}
		</>
	);
}
