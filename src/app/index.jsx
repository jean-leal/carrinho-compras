import React, { useState } from "react";
import { View } from "react-native";
import { StyleSheet, FlatList, StatusBar } from "react-native";

import Header from "../components/Header";
import ItemList from "../components/ItemList";
import CartProvider from "../contexts/CartContext";

export default function Index() {
  const [cart, setCart] = useState(['a'])
  const [produtcs, setProducts] = useState([{
    id: 1,
    name: 'Coca cola',
    price: 19.90
  },
  {
    id: 2,
    name: 'Chocolate',
    price: 9.90
  },
  {
    id: 3,
    name: 'Chiclete',
    price: 2.50
  },
  {
    id: 4,
    name: 'Margarina',
    price: 10
  },
  {
    id: 5,
    name: 'Pilha',
    price: 2.20
  }])

  return (
    <View>
      <CartProvider>
        <StatusBar backgroundColor={"#fafafa"} barStyle={"dark-content"} />
        <Header title={"Lista de Produtos"} cart={cart} />
        <View style={styles.container}>
        </View>
        <FlatList
          data={produtcs}
          renderItem={(item) => <ItemList data={item} />}
          keyExtractor={item => String(item.id)}
        />
      </CartProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingEnd: 14,
    paddingStart: 14,
    backgroundColor: '#fafafa'
  }
})