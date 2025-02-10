import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { CartContext } from "../contexts/CartContext";

import ItemCart from "../components/ItemCart";

export default function Cart() {
  const { cart, addItemCart, removeItemCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={() => <Text style={{fontSize: 16, textAlign: 'center'}}>Seu carrinho está vazio...</Text>}
        renderItem={({ item }) => (
          <ItemCart
            data={item}
            addAmount={() => addItemCart(item)}
            removeAmount={() => removeItemCart(item)} 
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingStart: 14,
    paddingTop: 14
  }
})