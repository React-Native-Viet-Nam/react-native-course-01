// import { Button, Modal, View } from "react-native";

const GoalFormModal = () => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        // This function is used to handle the hardware back button on Android
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Button
            title="Hide Modal"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default GoalFormModal;
