import React, { useState } from "react";
import { StyleSheet, FlatList, View, Button, Modal } from "react-native";

import Input from "./components/input";
import ListItem from "./components/listItem";

export default function App() {
  const [todoItem, setTodoitem] = useState([]);
  const [inputVal, setInputval] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddItem = (textVal) => {
    setInputval(() => textVal);
  };

  const addItem = (item) => {
    setTodoitem((prevValues) => [
      ...prevValues,
      {
        key: Math.random().toString(),
        value: item,
      },
    ]);
    setInputval(() => "");
    setShowModal(() => false);
  };

  const handleRemove = (id) => {
    const updatedList = todoItem.filter(({ key }) => key !== id);

    setTodoitem(() => updatedList);
  };

  const handleCloseModal = () => {
    setInputval(() => "");
    setShowModal(() => false);
  };

  return (
    <View style={styles.container}>
      <Modal visible={showModal} style={styles.modal} animationType='slide'>
        <View style={styles.inputConatainer}>
          <Input value={inputVal} onChange={handleAddItem} />
          <View style={styles.actionContainer}>
            <Button title="Add" onPress={() => addItem(inputVal)} />
            <Button color="red" title="Cancel" onPress={handleCloseModal} />
          </View>
        </View>
      </Modal>
      <View style={styles.addItem}>
        <Button title="Add an Item" onPress={() => setShowModal(() => true)} />
      </View>
      <View>
        <FlatList
          data={todoItem}
          renderItem={({ item }) => (
            <ListItem onClick={handleRemove} id={item.key} value={item.value} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingTop: 50,
    flex: 1,
  },
  addItem: {
    marginBottom: 20,
  },
  inputConatainer: {
    justifyContent: "center",
    marginHorizontal: 10,
    flex: 1,
  },
  modal: {
    display: "flex",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  actionContainer: {
    marginHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
