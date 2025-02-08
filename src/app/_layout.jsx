import { Stack } from 'expo-router/stack';
import CartProvider from "../contexts/CartContext";


export default function Layout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="index" options={{ 
          headerShown: false
          }} />
        <Stack.Screen name="cart" options={{ title: 'Carrinho de compras'}} />
      </Stack>
    </CartProvider>
  )
}