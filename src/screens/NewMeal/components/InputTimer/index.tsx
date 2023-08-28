import { useRef, useState } from "react";
import { Container, Describe, InputStyled, Content } from "./styles";
import {
	NativeSyntheticEvent,
	TextInput,
	TextInputKeyPressEventData,
} from "react-native";
import { TimerProps } from "../..";

interface Props {
	describe: string;
	onTimerChange: ({ hours, minutes }: TimerProps) => void;
	minutesInitial?: string;
	hoursInitial?: string;
}

export function InputTimer({
	describe,
	onTimerChange,
	minutesInitial = "",
	hoursInitial = "",
}: Props) {
	const InputHoursRef = useRef<TextInput>(null);
	const InputMinutesRef = useRef<TextInput>(null);

	const [minutes, setMinutes] = useState(minutesInitial);
	const [hours, setHours] = useState(hoursInitial);

	function handlePressContainer() {
		InputHoursRef.current?.focus();
	}

	function handleChangeHours(text: string) {
		if (text.length === 2) {
			InputMinutesRef.current?.focus();
		}
		if (Number(text) > 24 || Number(text) < 0) {
			setHours("12");

			return updateTimer("12", minutes);
		}
		setHours(text);
		updateTimer(text || "00", minutes);
	}
	function handleChangeMinutes(text: string) {
		if (Number(text) > 59 || Number(text) < 0) {
			setMinutes("30");

			return updateTimer(hours, "30");
		}
		setMinutes(text);
		updateTimer(hours, text || "00");
	}

	function handleKeyPressInputMinutes(
		event: NativeSyntheticEvent<TextInputKeyPressEventData>
	) {
		if (minutes.length === 0) {
			if (event.nativeEvent.key === "Backspace")
				return InputHoursRef.current?.focus();
		}
	}

	function updateTimer(hours: string, minutes: string) {
		onTimerChange({
			hours,
			minutes,
		});
	}

	return (
		<Container onPress={handlePressContainer}>
			<Describe>{describe}</Describe>
			<Content>
				<InputStyled
					maxLength={2}
					ref={InputHoursRef}
					value={hours}
					onChangeText={handleChangeHours}
					keyboardType="numeric"
				/>
				<Describe>:</Describe>
				<InputStyled
					maxLength={2}
					ref={InputMinutesRef}
					value={minutes}
					keyboardType="numeric"
					onChangeText={handleChangeMinutes}
					onKeyPress={handleKeyPressInputMinutes}
				/>
			</Content>
		</Container>
	);
}
