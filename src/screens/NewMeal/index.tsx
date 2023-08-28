import { HeaderMeal } from "@/components/HeaderMeal";
import { Container, Content, Row } from "./styles";
import { Input } from "@/components/Input";
import { useRef, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNDateTimePicker, {
	DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { Alert, TextInput } from "react-native";
import { InputTimer } from "./components/InputTimer";
import { DietPicker } from "./components/DietPicker";
import { Button } from "@/components/Button";
import { mealsAdd } from "@/storage/meals/meals-add";
import { useNavigation } from "@react-navigation/native";

export interface TimerProps {
	hours?: string;
	minutes?: string;
}

export function NewMeal() {
	const dateRef = useRef<TextInput>(null);
	const [isDiet, setIsDiet] = useState(false);
	const [name, setName] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [timer, setTimer] = useState<TimerProps>({
		hours: "12",
		minutes: "00",
	});
	const [date, setDate] = useState(dayjs());
	const [showDatePicker, setShowDatePicker] = useState(false);

	const { navigate } = useNavigation();

	function handleDateChange(event: DateTimePickerEvent, dateSelected?: Date) {
		setShowDatePicker(false);
		dateRef.current?.blur();
		if (dateSelected) {
			setDate(dayjs(dateSelected));
		}
	}

	function handleOpenTimerPickerModal() {
		setShowDatePicker(true);
	}
	function handleTimerChange({ hours, minutes }: TimerProps) {
		if (hours) {
			setTimer({ ...timer, hours });
		}
		if (minutes) {
			setTimer({ ...timer, minutes });
		}
	}
	function handleUpdateDiet(value: boolean) {
		setIsDiet(value);
	}

	async function handleSubmitForm() {
		const meal = {
			name: name.trim(),
			description: description.trim(),
			date,
			timer: {
				hours: timer.hours!,
				minutes: timer.minutes!,
			},
			isDiet,
		};

		try {
			if (meal.name.length === 0) {
				return Alert.alert("Campo Vazio", "Informe o nome da refeição");
			}
			if (!timer.hours || !timer.minutes) {
				return Alert.alert("Campo vazio", "Informe um horário");
			}

			await mealsAdd(meal);
			navigate("feedback", { isDiet: isDiet });
		} catch (error) {
			Alert.alert("Ops!", String(error));
		}
	}

	const dateInput = date.format("DD/MM/YYYY");
	const FutureDatesDisabled = dayjs().add(1).toDate();
	return (
		<Container>
			<HeaderMeal title="Nova refeição" />
			<Content>
				<Input describe="Nome" value={name} onChangeText={setName} />
				<Input
					describe="Descrição"
					numberOfLines={3}
					multiline={true}
					textAlignVertical="top"
					value={description}
					onChangeText={setDescription}
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
					<InputTimer describe="Hora" onTimerChange={handleTimerChange} />
				</Row>
				<DietPicker isDiet={isDiet} updatePicker={handleUpdateDiet} />
				{showDatePicker && (
					<DateTimePicker
						value={date.toDate()}
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
