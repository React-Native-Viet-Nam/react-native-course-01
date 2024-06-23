/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, Image } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const closeAddGoalModal = () => {
    setModalVisible(false);
  };

  const addGoalHandler = (goalText) => {
    setGoals((currentGoals) => {
      return [
        ...currentGoals,
        { text: goalText, id: Math.random().toString() },
      ];
    });
    closeAddGoalModal();
  };

  console.log("Goal App render!!!");

  return (
    <View style={styles.appContainer}>
      <Image style={styles.image} source={require("./assets/goal.png")} />
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Goals Management</Text>
      </View>
      <Button
        title="Add Modal"
        onPress={() => setModalVisible(true)}
        color="#50eacc"
      ></Button>
      <View style={styles.goalsContainer}>
        <Text style={{ marginBottom: 5, color: "#ffffff" }}>Goals</Text>

        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem item={itemData.item} index={itemData.index} />
          )}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
      <GoalInput
        isModalVisible={isModalVisible}
        addGoalHandler={addGoalHandler}
        onCancel={closeAddGoalModal}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#311b6b",
  },
  headerContainer: {
    marginBottom: 10,
    color: "#ffffff",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  goalsContainer: {
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
    paddingTop: 40,
    flex: 1,
  },
  text: {
    color: "#ffffff",
  },
});
