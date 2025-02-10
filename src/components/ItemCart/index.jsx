import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ItemCart({ data, addAmount, removeAmount }) {
  const [amount, setAmount] = useState(data.amount);

  function handleIncrease() {
    addAmount();
    setAmount(item => item + 1);
  }

  function handleDecrease() {
    removeAmount();

    if (amount === 0) {
      setAmount(0);
    }
    setAmount(item => item - 1);
  }
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>{"R$" + data.price}</Text>
      </View>
      <View style={styles.amountContainer}>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={handleDecrease}
        >
          <Ionicons name="remove-circle-outline" size={30} color={"#ec0001"} />
        </TouchableOpacity>
        <Text style={styles.amount}>{amount}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleIncrease}
        >
          <Ionicons name="add-circle" size={30} color={"#005eff"} />
        </TouchableOpacity>
      </View>

    </View>

  )
}