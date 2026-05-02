import { StyleSheet, Text, Platform } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    // fontWeight: "bold",
    color: "white",
    // borderWidth: Platform.OS === "ios" ? 2 : 0,
    borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderColor: "white",
    padding: 12,
    borderRadius: 12,
    maxWidth: "80%",
    width: 300,
  },
});
