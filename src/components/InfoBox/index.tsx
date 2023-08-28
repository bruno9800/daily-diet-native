import { useTheme } from "styled-components/native";
import { Container, Describe, Info } from "./styles";

interface Props {
	info: number;
	describe: string;
	bgColor?: "DEFAULT" | "GREEN" | "RED";
}

export function InfoBox({ info, describe, bgColor = "DEFAULT" }: Props) {
	const { COLORS } = useTheme();
	const color = () => {
		if (bgColor === "GREEN") return COLORS.GREEN_LIGHT;
		if (bgColor === "RED") return COLORS.RED_LIGHT;

		return COLORS.GRAY_600;
	};

	return (
		<Container bgColor={color()}>
			<Info>{info}</Info>
			<Describe>{describe}</Describe>
		</Container>
	);
}
