import React from 'react';

import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

function GoalInput(props) {
	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Enter '
					style={styles.input}
					onChangeText={props.inputHandler}
					value={props.goal}
				/>
				<View style={styles.buttonsMain}>
					<View style={styles.buttons}>
						<Button title='Cancel' color='red' onPress={props.cancelHandler} />
					</View>
					<View style={styles.buttons}>
						<Button title='Add' onPress={props.goalHandler} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		// taking full space of the parent child

		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		width: '90%',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
	}, 
	buttonsMain: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '60%',
		justifyContent: 'space-between',
		marginTop: 2,
	},
	buttons: {
		width: "40%"
	}
});

export default GoalInput;
