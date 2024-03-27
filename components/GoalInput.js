import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = ({ addGoalHandler }) => {
  const [goalText, setGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const onPress = () => {
    addGoalHandler(goalText);
    setGoalText("");
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        value={goalText}
        style={styles.formInput}
        placeholder="Please input your goal"
        onChangeText={goalInputHandler}
      ></TextInput>
      <Button title="Add" onPress={onPress}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginBottom: 40,
  },
  formInput: {
    borderWidth: 1,
    height: 40,
    borderColor: "#cccccc",
    flex: 1,
    padding: 5,
  },
});

export default GoalInput;
