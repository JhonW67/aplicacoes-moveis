import { StyleSheet } from "react-native";
import { THEME } from "../../styles/constant";

const stylesPrimary = StyleSheet.create({
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

const stylesSecondary = StyleSheet.create({
    buttonContainer: {
       ...stylesPrimary.buttonContainer,
       backgroundColor: "transparent",
    },
    buttonText: {
       ...stylesPrimary.buttonText,
        color: THEME.colors.primary
    }
})

const stylesOutline = StyleSheet.create({
    buttonContainer: {
        ...stylesPrimary.buttonContainer,
        

    },
    buttonText: {
        ...stylesPrimary.buttonText,
    }
})

export const styles ={
    primary: stylesPrimary,
    secondary: stylesSecondary,
    outline: stylesOutline
} as const
