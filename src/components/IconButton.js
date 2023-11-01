import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const IconButton = ({ style, icon }) => {
  return <TouchableOpacity style={style}>{icon}</TouchableOpacity>;
};

export default IconButton;

const styles = StyleSheet.create({});
