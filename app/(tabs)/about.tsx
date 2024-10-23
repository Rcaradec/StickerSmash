import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function About() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#25292e",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "#fff",
    },
    button: {
      fontSize: 20,
      textDecorationLine: "underline",
      color: "#fff",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Link href="/" style={styles.button}>
        Go to Home screen
      </Link>
    </View>
  );
}
