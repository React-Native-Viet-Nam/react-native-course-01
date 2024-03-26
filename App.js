import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const addGoalHandler = () => {
    console.log(goalText);
    setGoals((currentGoals) => {
      return [...currentGoals, goalText];
    });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.headerContainer}>
        <Text>Goals Management</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.formInput}
          placeholder="Please input your goal"
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title="Add" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          <Text style={{ marginBottom: 5 }}>Goals</Text>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            {goals.map((goal, goalIndex) => (
              <View
                style={{
                  marginVertical: 5,
                  padding: 5,
                  borderRadius: 10,
                  backgroundColor: goalIndex % 2 == 1 ? "#41C9E2" : "#ACE2E1",
                }}
              >
                <Text
                  key={goal}
                  style={{
                    color: "#000000",
                  }}
                >
                  {goal}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: "column",
    flex: 1,
  },
  headerContainer: {
    marginBottom: 10,
  },
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
  goalsContainer: {
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
    paddingTop: 40,
    flex: 1,
  },
});
