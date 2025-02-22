import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 70, 
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#005eff", 
    paddingLeft: 14,
    paddingRight: 14
  }, 
  title:{
    color: "#fff",
    fontSize: 22, 
    fontWeight: 'bold',
  },
  notification: {
    backgroundColor: "red", 
    alignItems: 'center', 
    alignContent: 'center',
    width: 20, 
    height: 20,
    textAlign: 'center', 
    borderRadius: 12, 
    color: '#fff',
    fontSize: 12, 
    position: 'absolute', 
    zIndex: 99, 
    bottom: -2,
    left: -4
  }
})