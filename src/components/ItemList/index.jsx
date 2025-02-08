import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ItemList({ data, addToCart }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>{"R$" + data.price}</Text>
      </View>
      <TouchableOpacity onPress={addToCart}>
        <Ionicons name="add-circle" size={30} color={"#005eff"} />
      </TouchableOpacity>
    </View>

  )
}