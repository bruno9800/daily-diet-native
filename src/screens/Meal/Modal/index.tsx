import { Button } from "@/components/Button";
import { Actions, Container, Overlay, Title } from "./styles";

interface ModalProps {
	cancel: () => void;
	onDelete: () => void;
}

export function Modal({ cancel, onDelete }: ModalProps) {
	return (
		<Overlay>
			<Container>
				<Title>Deseja realmente excluir o registro da refeição</Title>
				<Actions>
					<Button.Root
						style={{
							flex: 1,
							backgroundColor: "white",
							borderColor: "#1B1D1E",
							borderWidth: 1,
							borderStyle: "solid",
						}}
						onPress={cancel}
					>
						<Button.Text text="Cancelar" type="SECONDARY" />
					</Button.Root>
					<Button.Root style={{ flex: 1 }} onPress={onDelete}>
						<Button.Text text="Sim, excluir" />
					</Button.Root>
				</Actions>
			</Container>
		</Overlay>
	);
}
