import { useTheme } from "styled-components/native";
import { Container, Picker, PickerDisc, RowPicker, Title } from "./styles";

interface Props {
	isDiet: boolean;
	updatePicker: (value: boolean) => void;
}

export function DietPicker({ isDiet, updatePicker }: Props) {
	const { COLORS } = useTheme();

	return (
		<Container>
			<Title>Está dentro da dieta?</Title>
			<RowPicker>
				<Picker
					picker="YES"
					onPress={() => updatePicker(true)}
					style={[isDiet && { backgroundColor: COLORS.GREEN_LIGHT }]}
				>
					<PickerDisc picker="YES" />
					<Title>Sim</Title>
				</Picker>
				<Picker
					picker="NO"
					onPress={() => updatePicker(false)}
					style={[!isDiet && { backgroundColor: COLORS.RED_LIGHT }]}
				>
					<PickerDisc picker="NO" />
					<Title>Não</Title>
				</Picker>
			</RowPicker>
		</Container>
	);
}
