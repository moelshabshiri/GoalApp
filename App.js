import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, StatusBar, Header, Stack, ImageBackground } from "react-native";
import GoalItem from './Components/GoalItem'
import GoalInput from "./Components/GoalInput";
//jc main, ai: other
export default function App() {
 
  const [courseGoals, setcourseGoals] = useState([]);
  const [isAddMode, setIsAddMode]=useState(false);


  const addGoalHandler = Goaltitle => {
    if(Goaltitle.length===0)
    return;
    setcourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: Goaltitle}]);
    setIsAddMode(false);
  };

  const removeGoalHandler = Goalid => {
    setcourseGoals(currentGoals => 
      {
        return currentGoals.filter((goal)=> goal.key!==Goalid); 
      });
  };

  const cancelGoal= () => {
    setIsAddMode(false);
  }

  return (
<ImageBackground source={require('./assets/red2.jpg')} style={styles.screen}>
    <View >

  <View style={styles.addGoalButton}>
      <Button  color="white"  title="ADD GOAL" onPress={() => setIsAddMode(true)}/>
      </View>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} cancel={cancelGoal}/>
      <View style={styles.goalsView}> 
      <FlatList data={courseGoals} renderItem={((goal)=> <GoalItem id={goal.item.key} onDelete={removeGoalHandler} Goalitem={goal.item.value} /> )} />

      </View>
      
    </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  
    position: 'relative',
      width:'100%',
      height:'100%',
      backgroundColor:"green"
  },

  containerInput: {
    flexDirection: "row",
    width: '80%',
    height: 50,
    
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
    bottom: 580, 
  },

  containerText: {
    width: "80%",
    borderBottomColor: "blue",
    borderBottomWidth: 1
  },

    goalsView:{
      height:"80%",
      alignItems: 'center',
      position: 'relative', 
      bottom: -100, 
    },

    goalsText:{
      color:"white", 
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      marginBottom: 1,
      backgroundColor:"red",
    },
    addGoalButton:
    {
      position: 'relative',
      bottom:-30,
      left:0,
    }

});
