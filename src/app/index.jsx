import React from "react";
import { View } from "react-native";
import { StyleSheet, FlatList } from "react-native";

import Header from "../components/header";
import ItemList from "../components/ItemList";
import listItems from "../listItems";

export default function Index() {

  return (
    <View>
      <Header title={"Home"} />
      <View style={styles.container}>
      </View>
      <FlatList
        data={listItems}
        renderItem={(item) => <ItemList data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 14
  }
})