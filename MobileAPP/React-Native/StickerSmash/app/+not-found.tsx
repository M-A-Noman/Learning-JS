import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: "Oops! Not Found" }} />
			<Link href="/" style={styles.link}>
				Go to home screen!
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
		alignItems: "center",
		justifyContent: "center",
	},
	link: {
		fontSize: 20,
		textDecorationLine: "underline",
		color: "#fff",
	},
});
