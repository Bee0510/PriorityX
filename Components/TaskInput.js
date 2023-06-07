import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ArrowSmallRightIcon, PlusIcon } from "react-native-heroicons/solid";
import { addTASK, addTask } from "../Redux/actions";

const TaskInput = () => {
  const [todoText, setTodoText] = React.useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (todoText) {
      dispatch(
        addTASK({
          id: Date.now(),
          text: todoText,
          completed: false,
        })
      );
      setTodoText("");
    }
  };

  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center space-x-3">
        <PlusIcon size={20} color={"#98A2B3"} />
        <TextInput
          placeholder="     Add Task"
          onChangeText={(text) => setTodoText(text)}
          value={todoText}
        />
      </View>
      <TouchableOpacity className="h-8 w-8 bg-[#7F56D9] items-center justify-center rounded-sm">
        <Pressable onPress={handleAddTodo}>
          <ArrowSmallRightIcon size={20} color={"#1D2939"} />
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;
