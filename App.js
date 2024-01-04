import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [courseGoal, setCourseGoal] = useState([]);
    const [modalIsVisible, setModalVisible] = useState(false);

    function addGoalHandler(enteredGoalText) {
        setCourseGoal((currentCouseGoals) => [
            ...currentCouseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);

        endAddGoalHandler();
    }

    function deleteGoalHandler(id) {
        setCourseGoal((currentCouseGoals) => {
            return currentCouseGoals.filter((goal) => goal.id !== id);
        });
    }

    function startAddGoalHandler() {
        setModalVisible(true);
    }

    function endAddGoalHandler() {
        setModalVisible(false);
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button
                    title="Add New Goal"
                    color="darkviolet"
                    onPress={startAddGoalHandler}
                />
                <GoalInput
                    visible={modalIsVisible}
                    onAddGoal={addGoalHandler}
                    onCancel={endAddGoalHandler}
                />
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={courseGoal}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDeleteItem={deleteGoalHandler}
                                />
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 5,
    },
});
