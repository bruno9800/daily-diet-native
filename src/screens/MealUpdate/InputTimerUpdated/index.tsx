import { useRef, useState } from "react";
import { Container, Describe, InputStyled, Content } from "./styles";
import {
	NativeSyntheticEvent,
	TextInput,
	TextInputKeyPressEventData,
} from "react-native";
import { TimerProps } from "@/screens/NewMeal";

interface Props {
	describe: string;
	onTimerChange: ({ hours, minutes }: TimerProps) => void;
	hours: string;
	minutes: string;
}

export function InputTimer({ describe, onTimerChange, hours, minutes }: Props) {
	const InputHoursRef = useRef<TextInput>(null);
	const InputMinutesRef = useRef<TextInput>(null);

	function handlePressContainer() {
		InputHoursRef.current?.focus();
	}

	function handleChangeHours(text: string) {
		if (text.length === 2) {
			InputMinutesRef.current?.focus();
		}
		if (Number(text) > 24 || Number(text) < 0) {
			return onTimerChange({ hours: "12" });
		}
		updateTimer(text || "00", minutes);
	}
	function handleChangeMinutes(text: string) {
		if (Number(text) > 59 || Number(text) < 0) {
			return updateTimer(hours, "30");
		}
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
