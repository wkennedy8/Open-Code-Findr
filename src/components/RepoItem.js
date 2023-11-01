import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";

const RepoItem = ({ item }) => {
  console.log(item.language);
  return (
    <View style={styles.container}>
      <View>
        <Image />
      </View>
      <Text style={styles.title}>{item.name}</Text>
      <View
        style={[
          styles.flexRowItemsCenter,
          { marginTop: 10, justifyContent: "space-between" },
        ]}
      >
        <View style={styles.flexRowItemsCenter}>
          <AntDesign
            name="staro"
            size={20}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text>{item.stargazers_count}</Text>
        </View>
        <View style={styles.flexRowItemsCenter}>
          <Ionicons
            name="eye-outline"
            size={20}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text>{item.watchers}</Text>
        </View>
        <View style={styles.flexRowItemsCenter}>
          <Octicons
            name="repo-forked"
            size={20}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text>{item.forks}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepoItem;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.lightgray,
    padding: 20,
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
    textTransform: "capitalize",
  },
  flexRowItemsCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
});
