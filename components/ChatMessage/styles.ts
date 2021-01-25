import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    messageBox: {
        marginRight: 50,
        borderRadius: 10,
        padding:10
    },
    name: {
        color: Colors.light.tint,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    time: {
        alignSelf: "flex-end",
        color: "gray",
        fontSize: 12 
    },
    message: {
        color: 'black'
        
    }
})

export default styles;