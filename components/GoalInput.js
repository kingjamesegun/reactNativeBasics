import React from 'react';

import { StyleSheet, View, TextInput, Button } from 'react-native';

function GoalInput(props) {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholder='Enter '
				style={styles.input}
				onChangeText={props.inputHandler}
				value={props.goal}
			/>
			<Button title='Add' onPress={props.goalHandler} />
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		width: '90%',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
	},
});

export default GoalInput;
