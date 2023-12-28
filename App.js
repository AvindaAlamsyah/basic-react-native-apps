import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textContainer}>Another element here!!</Text>
      </View>
      <Text style={styles.textContainer}>Hello World</Text>
      <Button title="Tap Me...!"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    margin: 16,
    padding: 16,
    borderColor: "black",
    borderWidth: 2,
  },
});
