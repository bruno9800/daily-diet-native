import { useNavigation } from "@react-navigation/native";
import { Button, Container, Icon, Title, SpaceBox } from "./styles";

interface Props {
	title: string;
}

export function HeaderMeal({ title }: Props) {
	const { navigate } = useNavigation();

	function handleNavigateHome() {
		navigate("home");
	}

	return (
		<Container>
			<Button onPress={handleNavigateHome}>
				<Icon />
			</Button>
			<Title>{title}</Title>
			<SpaceBox />
		</Container>
	);
}
