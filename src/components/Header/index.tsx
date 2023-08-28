import { Container, Logo, UserImg, UserBox } from "./styles";
import logoImg from "@/assets/logo.png";
import userDefault from "@/assets/user-default.png";

export function Header() {
	return (
		<Container>
			<Logo source={logoImg} />
			<UserBox>
				<UserImg source={userDefault} />
			</UserBox>
		</Container>
	);
}
