import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../components/header";

export default function Cart() {
  return (
    <View>
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