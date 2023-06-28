import { Text, TouchableOpacity, View } from "react-native";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";

export default function Detail({ navigation, route }) {
  const { title, description, id, setTodos, todos } = route.params;
  const [currentDate, setCurrentDate] = useState("");

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.id !== id) return true;
      })
    );
    navigation.navigate("Home");
  };

  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [route]);

  useEffect(() => {
    const currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    setCurrentDate(day + "/" + month + "/" + year + " ");
  }, []);

  return (
    <View>
      <Text style={{ paddingTop: 30, paddingBottom: 30 }}>{description}</Text>
      <TouchableOpacity title="Delete" onPress={() => deleteTodo(id)} />
      <TouchableOpacity
        title="Delete"
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => {
          deleteTodo(id);
        }}
      >
        <Text>Delete</Text>
      </TouchableOpacity>

      <Text style={{ fontStyle: "italic" }}>{currentDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    width: 58,

    justifyContent: "center",
    padding: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "red",
  },
});
