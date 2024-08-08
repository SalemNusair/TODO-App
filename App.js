import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList, Button } from "react-native";

export default function App() {
    const [goalCourses, setGoalCourses] = useState([]);
    const [isVisable, setIsVisable] = useState(false);
    useEffect(() => {
        setGoalCourses([]);
    }, []);

    const addGoal = (enteredGoalCourse) => {
        setGoalCourses((currentGoalCourses) => [
            ...currentGoalCourses,
            { text: enteredGoalCourse, id: Math.random().toString() },
        ]);
        closeModal();
    };
    const handleDeleteItem = (itemId) => {
        setGoalCourses((goalCourses) =>
            goalCourses.filter(({ id }) => id !== itemId)
        );
    };
    const openModal = () => {
        setIsVisable(true);
    };
    const closeModal = () => {
        setIsVisable(false);
    };

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button title="Add Goal" color={"purple"} onPress={openModal} />
                <GoalInput
                    inputplaceHolder={"Your Goal Course..."}
                    ButtonText={"Add Goal"}
                    addGoal={addGoal}
                    visible={isVisable}
                    closeModal={closeModal}
                />
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={goalCourses}
                        keyExtractor={(item, index) => item.id}
                        renderItem={(dataItem) => {
                            return (
                                <GoalItem
                                    text={dataItem.item.text}
                                    onDeleteItem={handleDeleteItem}
                                    id={dataItem.item.id}
                                />
                            );
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
        flex: 4,
    },
});
