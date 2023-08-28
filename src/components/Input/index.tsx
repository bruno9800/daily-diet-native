import { TextInput, StyleProp, TextInputProps, ViewStyle } from "react-native";
import { Container, Describe, InputStyled } from "./styles";

interface Props extends TextInputProps {
	describe: string;
	containerStyled?: StyleProp<ViewStyle>;
	inputRef?: React.RefObject<TextInput>;
}

export function Input({ describe, inputRef, containerStyled, ...rest }: Props) {
	return (
		<Container style={containerStyled}>
			<Describe>{describe}</Describe>
			<InputStyled {...rest} ref={inputRef} />
		</Container>
	);
}
