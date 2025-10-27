import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image } from "react-native";

const Bedroom = () => {
  return (
    <>
      <View style={styles.title}>
        <Text style={styles.font}>Pou Game 2</Text>
        <StatusBar style="auto" />
      </View>
      <Image source={require("../images/image.png")} style={styles.pou} />
      <View style={styles.footer}></View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    borderRadius: 20,
    height: 55,
    width: 220,
    marginTop: 50,
    marginLeft: 90,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    fontSize: 36,
  },
  pou: {
    backgroundColor: "red",
    marginTop: "50%",
    marginLeft: "11%",
    height: 300,
    width: 320,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    backgroundColor: "green",
    marginTop: 100,
    height: 200,
    width: "100%",
  },
});

export default Bedroom;
