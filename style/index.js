import {Platform, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? 25 : 0,
        paddingHorizontal: 15,
        paddingBottom: 20
    },
    border: {
        borderWidth: 1
    },
});

export const text = StyleSheet.create({
    result: {
        fontSize: 50
    },
    white: {
        color: "white"
    },
    buttonSize: {
        fontSize: 30
    },
})

export const layout = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "center"
    },
    column: {
        flexDirection: "column"
    },
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2
    },
    flex3: {
        flex: 3
    },
    horizontalEnd: {
        justifyContent: "flex-end"
    },
    spaceBetween: {
        justifyContent: "space-between"
    }
})

export const button = StyleSheet.create({
    style: {
        height: 80,
        width: 80,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        margin: 7,
    },
    operation: {
        backgroundColor: "orange",
        elevation: 8
    },
    number: {
        backgroundColor: "white",
        elevation: 8
    },
    clear: {
        backgroundColor: "tomato"
    }
})
