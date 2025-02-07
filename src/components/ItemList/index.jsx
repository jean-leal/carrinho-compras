import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ItemList({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>{data.item.name}</Text>
        <Text style={styles.price}>{"R$" + data.item.price}</Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="add-circle" size={30} color={"#005eff"} />
      </TouchableOpacity>
    </View>

  )
}