import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
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
    <View className="flex-row items-center justify-between mb-3 mt-4">
      <View className="flex-row items-center space-x-3 ">
        <PlusIcon size={24} color={"#98A2B3"} />
        <TextInput
          className="w-64 overflow-clip"
          placeholder="     Add Task"
          onChangeText={(text) => setTodoText(text)}
          value={todoText}
        />
      </View>
      <TouchableOpacity className="h-8 w-8 bg-[#1D2939] items-center justify-center rounded-full">
        <Pressable onPress={handleAddTodo}>
          <ArrowSmallRightIcon size={20} color={"white"} />
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;
