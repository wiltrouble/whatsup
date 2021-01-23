import { Fontisto } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
    container: {
        flexDirection: 'row',
        with: '100%',
        justifyContent: 'space-between',
        padding: 10

    },
    leftContainer: {
        flexDirection: 'row'
    },
    midContainer: {
        justifyContent: 'space-around'
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 15,
        borderRadius: 50
    },
    username: {
        fontWeight: "bold",
        fontSize: 16
    },
    lastMessage: {
        color: 'gray',
        fontSize: 16
    },
    time: {
        color: 'gray',
        fontSize: 16
    }
})

export default styles;
