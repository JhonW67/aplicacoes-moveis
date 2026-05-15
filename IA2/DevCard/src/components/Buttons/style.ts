import { StyleSheet } from "react-native";
import { THEME } from "../../styles/constant";

export const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: THEME.colors.primary,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: THEME.border.radius.md
    },
    buttonText: {
         color: THEME.colors.primaryForeground,
        fontWeight: "500",
        fontSize: 18
    },   
})
