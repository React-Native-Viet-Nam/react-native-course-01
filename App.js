import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
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

  return (
    <View style={styles.appContainer}>
      <View style={styles.headerContainer}>
        <Text>Goals Management</Text>
      </View>
      <Button title="Add Modal" onPress={() => setModalVisible(true)}></Button>
      <View style={styles.goalsContainer}>
        <Text style={{ marginBottom: 5 }}>Goals</Text>

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
  goalsContainer: {
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
    paddingTop: 40,
    flex: 1,
  },
});
