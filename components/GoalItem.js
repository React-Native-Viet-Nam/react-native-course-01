import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({ item, index }) => {
  return (
    <View
      style={{
        ...styles.goalItemContainer,
        backgroundColor: index % 2 == 1 ? "#41C9E2" : "#ACE2E1",
      }}
    >
      <Text
        style={{
          color: "#000000",
        }}
      >
        {item.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItemContainer: {
    marginVertical: 5,
    padding: 5,
    borderRadius: 10,
  },
});

export default GoalItem;
