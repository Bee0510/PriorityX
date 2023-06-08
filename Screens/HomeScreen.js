import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Keira, Default, WIT, oliva } from "../assets";
import { MinusCircleIcon, TrashIcon } from "react-native-heroicons/solid";
import TaskInput from "../Components/TaskInput";
import TaskItem from "../Components/TaskItem";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";
import { removeTASK } from "../Redux/actions";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTASK(id));
  };

  const renderTodo = ({ item }) => (
    <View className="flex-row items-center justify-between">
      <TaskItem text={item.text} />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 relative bg-[#D7D7D7] mt-6">
      <StatusBar barStyle="dark-content" backgroundColor="#D7D7D7" />
      <ScrollView>
        <View className="flex-col justify-items-start px-6 space-y-5">
          <View className="justify-center items-center mt-14 font-medium">
            <Text className="text-[#111322] text-base">Task Details</Text>
          </View>
          <View className="flex-col justify-items-start space-y-4">
            <Text className="text-[#5D6B98] text-sm">Task Tittle</Text>
            <Text className="text-[20px] font-bold text-[#1D2939]">
              NFT Web App Prototype
            </Text>
          </View>

          <View className="flex-col justify-items-start space-y-4">
            <Text className="text-[#5D6B98] text-sm">Descriptions</Text>
            <Text className="text-[#111322] text-sm">
              Last year was a fantastic year for NFTs, with the market reaching
              a $40 billion valuation for the first time. In addition, more than
              $10 billion worth of NFTs are now sold every week - with NFT..
            </Text>
          </View>

          <View className="flex-row">
            <View className="w-[24px] h-[24px] rounded-full">
              <Image source={Keira} className="w-full h-full object-contain" />
            </View>

            <View className="w-[24px] h-[24px]  rounded-full -left-1">
              <Image
                source={Default}
                className="w-full h-full object-contain"
              />
            </View>
            <View className="w-[24px] h-[24px]  rounded-full -left-2">
              <Image source={oliva} className="w-full h-full object-contain" />
            </View>
            <View className="w-[24px] h-[24px] rounded-full -left-3">
              <Image source={WIT} className="w-full h-full object-contain" />
            </View>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-[#5D6B98] text-sm">Task List</Text>
            <TouchableOpacity onPress={() => handleRemoveTodo()}>
              <TrashIcon size={20} color={"#F30000"} />
            </TouchableOpacity>
          </View>

          <View>
            <FlatList
              data={todos}
              renderItem={renderTodo}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
          <TaskInput />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
