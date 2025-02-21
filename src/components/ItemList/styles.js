import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#005eff",
    borderRadius: 4,
    padding: 12,
    margin: 12,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 16,
  }
})