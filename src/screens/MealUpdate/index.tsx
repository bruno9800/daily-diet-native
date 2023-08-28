import { HeaderMeal } from "@/components/HeaderMeal";
import { Container, Content, Row } from "./styles";
import { Input } from "@/components/Input";
import { TimerProps } from "../NewMeal";
import { useCallback, useRef, useState } from "react";
import { Alert, TextInput } from "react-native";
import dayjs from "dayjs";
import DateTimePicker, {
	DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import {
	useFocusEffect,
	useNavigation,
	useRoute,
} from "@react-navigation/native";
import { mealsUpdateByNameAndDate } from "@/storage/meals/meals-update-by-name-and-date";
import { DietPicker } from "../NewMeal/components/DietPicker";
import { Button } from "@/components/Button";
import { mealsGetByNameAndDate } from "@/storage/meals/meals-get-by-name-and-date";
import { MealStorageDTO } from "@/storage/meals/MealStorageDTO";
import { InputTimer } from "./InputTimerUpdated";

interface Params {
	name: string;
	date: dayjs.Dayjs;
}

export function MealUpdate() {
	const dateRef = useRef<TextInput>(null);
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [meal, setMeal] = useState<MealStorageDTO>({
		date: dayjs(),
		description: "",
		isDiet: false,
		name: "",
		timer: {
			hours: "00",
			minutes: "00",
		},
	});

	const { navigate } = useNavigation();
	const { params } = useRoute();
	const { date: dateMeal, name: nameMeal } = params as Params;

	function handleDateChange(event: DateTimePickerEvent, dateSelected?: Date) {
		setShowDatePicker(false);
		dateRef.current?.blur();
		if (dateSelected) {
			setMeal((state) =>
				state ? { ...state, date: dayjs(dateSelected) } : state
			);
		}
	}

	function handleOpenTimerPickerModal() {
		setShowDatePicker(true);
	}
	function handleTimerChange({ hours, minutes }: TimerProps) {
		if (hours) {
			setMeal((state) =>
				state
					? {
							...state,
							timer: {
								hours: hours,
								minutes: state.timer.minutes,
							},
					  }
					: state
			);
		}
		if (minutes) {
			setMeal((state) =>
				state
					? {
							...state,
							timer: {
								minutes: minutes,
								hours: state.timer.hours,
							},
					  }
					: state
			);
		}
	}
	function handleUpdateDiet(value: boolean) {
		setMeal((state) => (state ? { ...state, isDiet: value } : state));
	}

	async function handleSubmitForm() {
		try {
			if (meal.name.length === 0) {
				return Alert.alert("Campo Vazio", "Informe o nome da refeição");
			}
			if (!meal.timer.hours || !meal.timer.minutes) {
				return Alert.alert("Campo vazio", "Informe um horário");
			}

			await mealsUpdateByNameAndDate(nameMeal, dateMeal, meal);
			navigate("feedback", { isDiet: meal.isDiet });
		} catch (error) {
			Alert.alert("Ops!", String(error));
		}
	}

	async function fetchMeal() {
		try {
			const storage = await mealsGetByNameAndDate(nameMeal, dateMeal);
			setMeal(storage);
		} catch (error) {
			console.error(error);
		}
	}

	const dateInput = dayjs(meal.date).format("DD/MM/YYYY");
	const FutureDatesDisabled = dayjs().add(1).toDate();

	useFocusEffect(
		useCallback(() => {
			fetchMeal();
		}, [])
	);

	return (
		<Container>
			<HeaderMeal title="Nova refeição" />
			<Content>
				<Input
					describe="Nome"
					value={meal.name}
					onChangeText={(e) =>
						setMeal((state) => (state ? { ...state, name: e } : state))
					}
				/>
				<Input
					describe="Descrição"
					numberOfLines={3}
					multiline={true}
					textAlignVertical="top"
					value={meal.description}
					onChangeText={(e) =>
						setMeal((state) => (state ? { ...state, description: e } : state))
					}
				/>
				<Row>
					<Input
						placeholder="dd/mm/aaaa"
						describe="Data"
						containerStyled={{ flex: 1 }}
						keyboardType="numeric"
						maxLength={10}
						value={dateInput}
						onFocus={handleOpenTimerPickerModal}
						inputRef={dateRef}
						editable={!showDatePicker}
					/>
					<InputTimer
						describe="Hora"
						onTimerChange={handleTimerChange}
						minutes={meal.timer.minutes}
						hours={meal.timer.hours}
					/>
				</Row>
				<DietPicker isDiet={meal.isDiet} updatePicker={handleUpdateDiet} />
				{showDatePicker && (
					<DateTimePicker
						value={dayjs(meal.date).toDate()}
						mode="date"
						onChange={handleDateChange}
						maximumDate={FutureDatesDisabled}
					/>
				)}
				<Button.Root style={{ marginTop: "auto" }} onPress={handleSubmitForm}>
					<Button.Text text="Salvar alterações" />
				</Button.Root>
			</Content>
		</Container>
	);
}
