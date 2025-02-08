import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";
import { CartContext } from "../../contexts/CartContext";

export default function Header({ title }) {
  const { cart } = useContext(CartContext);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      {title === "Lista de Produtos" ?
        <TouchableOpacity style={{ paddingRight: 12 }} onPress={() => router.navigate("/cart")}>
          <Ionicons name="cart" size={32} color={"#fff"} />
          <Text style={styles.notification}>{cart?.length}</Text>
        </TouchableOpacity>
        : <></>}
    </View>
  )
}