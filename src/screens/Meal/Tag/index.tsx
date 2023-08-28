import { Container, Strong, TagStatus } from "./styles";

interface Props {
	status?: boolean;
}

export function Tag({ status = true }: Props) {
	const text = status ? "dentro da dieta" : "fora da dieta";
	return (
		<Container>
			<TagStatus type={status ? "GOOD" : "BAD"} />
			<Strong>{text}</Strong>
		</Container>
	);
}
