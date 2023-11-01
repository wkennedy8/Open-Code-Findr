import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const SearchInput = ({ icon, placeholder }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 15,
        borderRadius: 12,
        borderColor: COLORS.lightgray,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {icon}
      <TextInput
        style={{ marginLeft: 5, fontSize: 16 }}
        placeholder={placeholder}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
