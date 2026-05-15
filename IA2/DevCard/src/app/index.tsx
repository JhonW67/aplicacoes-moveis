import { Text, View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { THEME } from "../styles/constant"
import { Button } from '../components/Buttons/index';
export default function HomeScreen(){
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Ionicons name="card-outline" style={styles.icon} />
                    <Text style={styles.logo}>DevCard</Text>
                    <Text style={styles.subtitle}>Seu cartão de visitas digital de dev mobile</Text>
                </View>

                <Button label="Criar meu cartão"/>

                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Aplicações Moveis - Instrumento Avaliativo 2</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        paddingHorizontal: 26
    },
    headerContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 780
    },
    icon: {
        color: THEME.colors.primary,
        fontSize: 120
    },
    logo: {
        color: THEME.colors.primary,
        fontSize: 56,
        fontWeight: "bold"
    },
    subtitle: {
        color: THEME.colors.secondary,
        fontWeight: "400",
        fontSize: 16,
        width: 200,
        textAlign: "center"
    },
    footerContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 60
    },
    footerText: {
        color: THEME.colors.third,
        fontSize: 14
    },

})