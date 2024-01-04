import { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalhandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal
            visible={props.visible}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/goal.png')}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={addGoalhandler}
                            color="darkviolet"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={props.onCancel}
                            color="indianred"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'green',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 6,
        width: '100%',
        padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
});
