import { ReactNode } from "react";
import { ButtonContainer } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonRootProps extends TouchableOpacityProps {
	children: ReactNode;
}

export function ButtonRoot({ children, ...rest }: ButtonRootProps) {
	return <ButtonContainer {...rest}>{children}</ButtonContainer>;
}
