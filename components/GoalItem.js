import { View, Text, Pressable, StyleSheet } from "react-native";
const GoalItem = ({ text, onDeleteItem, id }) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "purple" }}
                style={({ pressed }) => pressed && styles.pressedItem}
                onPress={onDeleteItem.bind(this, id)}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
};
export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    goalText: {
        color: "white",
    },
    pressedItem: {
        backgroundColor: "#301934",
    },
});
