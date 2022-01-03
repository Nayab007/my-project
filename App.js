import React, {useState} from 'react';

import { StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput, 
  ScrollView,
FlatList } from 'react-native';

import GoaItem from './components/GoalItem';

export default function App() {
  const [ enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, 
      { id: Math.random().toString(), value: enteredGoal}
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goal" 
        style={styles.input}
        onChangeText={goalInputHandler} />

        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <FlatList 
        keyExtractor={(item, index) => item.id}
      data={courseGoals}  
      renderItem={itemData => <GoalItem />
        
  }
  />
  </View>
  );
      }


const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    width: '75%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    
  },

 
});
