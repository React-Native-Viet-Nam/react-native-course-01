import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => {
      return [
        ...currentGoals,
        { text: goalText, id: Math.random().toString() },
      ];
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
        <Text style={{ marginBottom: 5 }}>Goals</Text>

        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  marginVertical: 5,
                  padding: 5,
                  borderRadius: 10,
                  backgroundColor:
                    itemData.index % 2 == 1 ? "#41C9E2" : "#ACE2E1",
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                  }}
                >
                  {itemData.item.text}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
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
