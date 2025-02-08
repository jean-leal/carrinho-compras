import React, { useState, useContext } from "react";
import { View } from "react-native";
import { StyleSheet, FlatList, StatusBar } from "react-native";

import Header from "../components/Header";
import ItemList from "../components/ItemList";
import {CartContext} from "../contexts/CartContext";

export default function Index() {
  const { cart, addItemCart } = useContext(CartContext);

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

  function handleAddCart(item){
    addItemCart(item)
  }

  return (
    <View>      
        <StatusBar backgroundColor={"#fafafa"} barStyle={"dark-content"} />
        <Header title={"Lista de Produtos"} cart={cart} />
        <View style={styles.container}>
        </View>
        <FlatList
          data={produtcs}
          renderItem={({item}) => <ItemList data={item} addToCart={() => handleAddCart(item)} />}
          keyExtractor={item => String(item.id)}
        />    
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