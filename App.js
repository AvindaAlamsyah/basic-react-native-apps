import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another element here!!</Text>
      </View>
      <Text
        style={{
          margin: 16,
          borderWidth: 2,
          borderBottomColor: "black",
          padding: 16,
        }}
      >
        Hello World
      </Text>
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
});
