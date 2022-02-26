import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

//
export default function App() {
	const [enteredGoal, setEnteredGoal] = useState('');
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};
	const addGoalHandler = () => {
		setCourseGoals((currentGoals) => [
			...currentGoals,
			{ key: Math.random().toString(), value: enteredGoal },
		]);
	};

	return (
		<View style={styles.screen}>
			<GoalInput
				goal={enteredGoal}
				inputHandler={goalInputHandler}
				goalHandler={addGoalHandler}
			/>
			<FlatList
				keyExtractor={(item, index) => item.key}
				data={courseGoals}
				renderItem={(itemData) => (
					<GoalItem
						onDelete={() => console.log('Does this work?')}
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
