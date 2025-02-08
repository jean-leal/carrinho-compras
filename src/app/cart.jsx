import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

import Header from "../components/Header";

export default function Cart() {
  return (
    <View>
      <StatusBar backgroundColor={"#fafafa"} barStyle={"dark-content"} />
      <Header title={"Carrinho"} />
      <Text>Carrinho de copras</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 14
  }
})