import { View } from "react-native"
import { styles } from "./styles"
export function CardTextContainer({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.cardTextContainer}>
            {children}
        </View>
    )
}