/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = ({ addGoalHandler, isModalVisible, onCancel }) => {
  const [goalText, setGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const onPress = () => {
    addGoalHandler(goalText);
    setGoalText("");
  };

  const onCloseModal = () => {
    onCancel();
  };

  return (
    <Modal animationType="slide" visible={isModalVisible}>
      <View style={styles.formContainer}>
        <TextInput
          value={goalText}
          style={styles.formInput}
          placeholder="Please input your goal"
          onChangeText={goalInputHandler}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={onPress}></Button>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCloseModal}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  formInput: {
    borderWidth: 1,
    height: 40,
    borderColor: "#cccccc",
    padding: 5,
    width: "84%",
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});

export default GoalInput;
