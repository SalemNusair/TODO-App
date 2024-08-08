import { useState } from "react";
import {
    TextInput,
    Button,
    View,
    Modal,
    Image,
    StyleSheet,
} from "react-native";
const GoalInput = ({
    inputplaceHolder,
    addGoal,
    ButtonText,
    visible,
    closeModal,
}) => {
    const [enteredGoalCourse, setEnteredGoalCourse] = useState("");
    const handleTextChange = (text) => {
        setEnteredGoalCourse(text);
    };
    const addGoalHandler = () => {
        addGoal(enteredGoalCourse);
        setEnteredGoalCourse("");
    };
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/goal.png")}
                />
                <TextInput
                    onChangeText={handleTextChange}
                    style={styles.textInput}
                    placeholder={inputplaceHolder}
                    value={enteredGoalCourse}
                />
                <View style={styles.buttonContianer}>
                    <View style={styles.button}>
                        <Button
                            title={ButtonText}
                            onPress={addGoalHandler}
                            color={"#50eacc"}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={closeModal}
                            color={"#f31282"}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
export default GoalInput;
const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        borderRadius: 6,
        backgroundColor: "#e4d0ff",
        color: "#120438",
        width: "100%",
        padding: 16,
    },
    inputContainer: {
        flex: 1,
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
    },
    buttonContianer: {
        marginTop: 16,
        flexDirection: "row",
        // justifyContent: "space-between",
    },
    button: {
        width: 100,
        marginHorizontal: 8, // left and right
    },
    image: {
        width: 100,
        height: 100,
        margin: 8,
    },
});
