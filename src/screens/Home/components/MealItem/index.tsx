import { TouchableOpacityProps } from "react-native";
import { Container, Divider, Meal, Status, Timer, statusType } from "./styles";

interface MealProps extends TouchableOpacityProps {
	timer: {
		hours: string;
		minutes: string;
	};
	meal: string;
	status: boolean;
}

export function MealItem({ timer, meal, status, ...props }: MealProps) {
	return (
		<Container {...props}>
			<Timer>
				{timer.hours}:{timer.minutes}
			</Timer>
			<Divider />
			<Meal> {meal} </Meal>
			<Status status={status ? "GOOD" : "BAD"} />
		</Container>
	);
}
