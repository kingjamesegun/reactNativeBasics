import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

//
export default function App() {
	const [enteredGoal, setEnteredGoal] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};
	const addGoalHandler = () => {
		setCourseGoals((currentGoals) => [
			...currentGoals,
			{ key: Math.random().toString(), value: enteredGoal },
		]);
		setIsAddMode(false);
		setEnteredGoal("");
	};

	const removeGoalHandler = (goalId) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		});
	};

	const cancelGoalHandler=()=>{
		setIsAddMode(false);
	}

	return (
		<View style={styles.screen}>
			<Button title="Add New Goal" onPress={()=> setIsAddMode(true)}/>
			<GoalInput
				goal={enteredGoal}
				visible={isAddMode}
				inputHandler={goalInputHandler}
				goalHandler={addGoalHandler}
				cancelHandler={cancelGoalHandler}
			/>
			<FlatList
				keyExtractor={(item, index) => item.key}
				data={courseGoals}
				renderItem={(itemData) => (
					<GoalItem
						id={itemData.item.id}
						onDelete={removeGoalHandler}
						text={itemData.item.value}
					/>
				)}
			></FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
});
