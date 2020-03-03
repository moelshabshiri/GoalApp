import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Modal } from "react-native";

const GoalInput = props =>
{
    const [enteredGoal, setEnteredGoal] = useState('');

    const changeGoal = (goal) => {
        setEnteredGoal(goal);
      };

      const addGoalHandler = () =>{
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
      }

    return (
      
        <Modal visible={props.visible} animationType="slide" transparent={true}>
        <View style={styles.containerInput}>
        <TextInput
          placeholder="Course Goal"
          style={styles.containerText}
          onChangeText={changeGoal}
          value={enteredGoal}
          
        />
       <View style={styles.buttons}>
          
        <Button title="ADD" onPress={addGoalHandler} />
        <Button title="CANCEL" color="red" onPress={props.cancel} />
        </View>
      </View>
      </Modal>
      
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    
  buttons:{
    flexDirection:'row'
  },
    containerInput: {
     
  height:'13%',
 
  
      justifyContent: 'center',
      alignItems: 'center',
      position:"relative",
      bottom: -200,
      backgroundColor:"white"
    },
  
    containerText: {
      width: "80%",
      borderBottomColor: "red",
      borderBottomWidth: 1,
      marginBottom: 10,
      color:"black",
      alignItems:'center'
    },
  
  
  });
  