import { StyleSheet } from "react-native"
import { THEME } from "../../styles/constant"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        paddingHorizontal: 26
    },
    footerContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 60
    },
    cardContainer: {
        backgroundColor: "#3783f6",
        borderRadius: THEME.border.radius.xl,
        padding: 32,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
    },
    cardSeparator: {
        backgroundColor: '#ffffff',
        width: 250,
        height: 1,
        marginVertical: 16,
    },
    cardAvatarContainer: {
        backgroundColor: "#a5c0e27f",
        padding: 4,
        borderRadius: "100%",
    },
    cardAvatarOverlay: {
        backgroundColor: "#f8fbff",
        borderRadius: "100%",
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    cardTextContainer:{
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
    },
    cardBadgeContainer: {
        backgroundColor: '#e6ba2b',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: THEME.border.radius.xxl,
        marginTop: 8,
  },

})
