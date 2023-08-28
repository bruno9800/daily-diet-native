import { TextButton } from "./styles";

interface TextButton {
	text: string;
	type?: "PRIMARY" | "SECONDARY";
}

export function ButtonText({ text, type = "PRIMARY" }: TextButton) {
	return <TextButton type={type}>{text}</TextButton>;
}
