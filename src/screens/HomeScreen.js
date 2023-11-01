import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { FontAwesome5, Ionicons, EvilIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import {
  IconButton,
  HomeSectionHeader,
  SearchInput,
  RepoItem,
} from "../components";
import { useQuery } from "@tanstack/react-query";

const HomeScreen = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/repos");
      const res = await response.json();
      const data = res.data.filter((r) => r.language);
      return data;
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    }
  };
  const { isLoading, data, error } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.introduction}>
        <View style={styles.flexRowItemsCenter}>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.user}> William!</Text>
        </View>
        <View style={styles.flexRowItemsCenter}>
          <IconButton
            icon={<FontAwesome5 name="bell" size={24} color="black" />}
            style={[styles.circle, { marginRight: 10 }]}
          />
          <IconButton
            icon={<Ionicons name="person" size={24} color="black" />}
            style={styles.circle}
          />
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <SearchInput
          icon={<EvilIcons name="search" size={24} color="black" />}
          placeholder="Search open source repositories..."
        />
      </View>
      <HomeSectionHeader title="Most Recent" style={{ marginTop: 10 }} />
      <FlatList
        data={data}
        contentContainerStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        renderItem={({ item }) => <RepoItem key={item.id} item={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  introduction: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
  },
  flexRowItemsCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    borderWidth: 1,
    borderColor: COLORS.lightgray,
    borderRadius: "50%",
    padding: 10,
  },
  greeting: {
    fontSize: 24,
  },
  user: {
    fontSize: 24,
    fontWeight: "500",
  },
});
