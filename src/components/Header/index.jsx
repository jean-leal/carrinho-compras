import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";

export default function Header({ title }) {

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      {title === "Home" ?
        <TouchableOpacity style={{ paddingRight: 12 }} onPress={() => router.navigate("/cart")}>
          <Ionicons name="cart" size={32} color={"#fff"} />
        </TouchableOpacity>
        : <></>}
    </View>
  )
}