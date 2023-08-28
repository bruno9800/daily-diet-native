import { Hero } from "@/components/Hero";
import { ButtonIcon, Container, Icon, PercentBoxStyled } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface Props {
	type?: PercentBoxStyled;
	info: number;
	describe: string;
	isPercent?: boolean;
}

export function PercentBox({
	info,
	describe,
	type = "PRIMARY",
	isPercent = false,
}: Props) {
	const { navigate } = useNavigation();

	function handleNavigation() {
		navigate("statistics");
	}

	return (
		<Container type={type}>
			<Hero info={info} describe={describe} isPercent={isPercent} />
			<ButtonIcon onPress={handleNavigation}>
				<Icon type={type} />
			</ButtonIcon>
		</Container>
	);
}
