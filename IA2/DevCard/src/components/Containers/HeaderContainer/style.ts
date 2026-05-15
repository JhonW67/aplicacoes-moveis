import { StyleSheet } from "react-native";

const stylesPrimary = StyleSheet.create({
    headerContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 780
    },  
})

const stylesSecondary = StyleSheet.create({
    headerPageContainer: {
       ...stylesPrimary.headerContainer,
       flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 12,
    },
})

export const styles ={
    primary: stylesPrimary,
    secondary: stylesSecondary,
} as const