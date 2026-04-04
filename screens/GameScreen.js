import { View, Text, StyleSheet } from "react-native";

const GameScreen = () => {
  return (
    <View>
      <Text>Opponent's Guess</Text>
      {/* Guess */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* + -  */}
      </View>
      {/* Log Rounds */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
