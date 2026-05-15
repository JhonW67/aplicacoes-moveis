import { View } from "react-native"
import { styles } from "./styles"

export function CardContainer({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.cardContainer}>
            {children}
        </View>
    )
}