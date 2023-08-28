import { Container, Describe, Info } from "./styles";

interface Props {
	info: number;
	describe: string;
	isPercent?: boolean;
}

export function Hero({ info, describe, isPercent = false }: Props) {
	// const percentInfo = info.toString().padEnd(5, "0").replace(".", ",") + "%";

	const percentInfo = info.toFixed(2).replace(".", ",");

	return (
		<Container>
			<Info>{isPercent ? percentInfo : info.toString()}</Info>
			<Describe>{describe}</Describe>
		</Container>
	);
}
