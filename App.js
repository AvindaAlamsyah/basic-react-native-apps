import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoal, setCourseGoal] = useState([]);

    function addGoalhandler(enteredGoalText) {
        setCourseGoal((currentCouseGoals) => [
            ...currentCouseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
    }

    function deleteGoalHandler(id) {
        setCourseGoal((currentCouseGoals) => {
            return currentCouseGoals.filter((goal) => goal.id !== id);
        });
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalhandler} />
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
