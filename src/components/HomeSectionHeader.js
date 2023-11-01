import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const HomeSectionHeader = ({ title, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.link}>View all</Text>
    </View>
  );
};

export default HomeSectionHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "300",
  },
  link: {
    fontSize: 16,
    color: COLORS.darkgray,
  },
});
