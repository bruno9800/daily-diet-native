import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";

import {
	NunitoSans_400Regular,
	NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";
import theme from "./src/theme";
import { Loading } from "@/components/Loading";
import { Routes } from "./src/routes";

export default function App() {
	const [fontLoader] = useFonts({
		NunitoSans_400Regular,
		NunitoSans_700Bold,
	});

	if (!fontLoader) {
		return;
	}

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style="auto" />
			{fontLoader ? <Routes /> : <Loading />}
		</ThemeProvider>
	);
}
