import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const TaskItem = (props) => {
  const [agree, setAgree] = useState(false);

  return (
    <View className="flex-row space-x-4 items-center px-3 h-20">
      <Checkbox
        className=" rounded-3xl w-6 h-6 "
        value={agree}
        onValueChange={() => setAgree(!agree)}
        color={agree ? "#7F56D9" : undefined}
      />

      <Text className="overflow-clip text-base font-[500] text-[#30374F]">
        {props.text}
      </Text>
    </View>
  );
};

export default TaskItem;
