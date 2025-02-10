import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#005eff",
    borderRadius: 4,
    padding: 8,
    margin: 12,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  price: {
    fontSize: 16
  }, 
  amountContainer: {
    marginTop: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  removeButton: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  addButton: {
    paddingLeft: 8,
    paddingRight: 8
  },
  amount:{
    fontSize: 18,
    marginLeft: 8,
    marginRight: 8,
  }
})