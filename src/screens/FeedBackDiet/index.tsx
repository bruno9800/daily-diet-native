import { Button } from "@/components/Button";
import { Container, Image, Strong, Subtitle, Title } from "./styles";
import imageIllustration from "@/assets/Illustration.png";
import imageIllustrationBad from "@/assets/IllustrationBad.png";
import { useNavigation, useRoute } from "@react-navigation/native";

interface Params {
	isDiet: boolean;
}

interface FeedbackType {
	handleNavigation: () => void;
}

export function FeedBackDiet() {
	const { navigate } = useNavigation();

	const { params } = useRoute();
	const { isDiet } = params as Params;

	function handleNavigation() {
		navigate("home");
	}

	return isDiet
		? FeedbackGood({ handleNavigation })
		: FeedbackBad({ handleNavigation });
}

function FeedbackGood({ handleNavigation }: FeedbackType) {
	return (
		<Container>
			<Title type="GOOD">Continue assim!</Title>
			<Subtitle>
				Você continua <Strong> dentro da dieta.</Strong> Muito bem
			</Subtitle>
			<Image source={imageIllustration} />
			<Button.Root onPress={handleNavigation}>
				<Button.Text text="Ir para a página inicial" />
			</Button.Root>
		</Container>
	);
}

function FeedbackBad({ handleNavigation }: FeedbackType) {
	return (
		<Container>
			<Title type="BAD">Que pena!</Title>
			<Subtitle>
				Você<Strong> saiu da dieta.</Strong> dessa vez, mas continue se
				esforçando e não desista!
			</Subtitle>
			<Image source={imageIllustrationBad} />
			<Button.Root onPress={handleNavigation}>
				<Button.Text text="Ir para a página inicial" />
			</Button.Root>
		</Container>
	);
}
