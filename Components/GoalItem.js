import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalsItem}>
        <Text style={styles.goalsText}>{props.Goalitem}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalsItem: {
shadowRadius:10,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 60,
    marginBottom: 3,
    borderRadius: 8,
    backgroundColor: "red"
  },
  goalsText: {
    color: "white"
  }
});
