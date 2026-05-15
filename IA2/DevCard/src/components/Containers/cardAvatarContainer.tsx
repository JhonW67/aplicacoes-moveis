import { View } from "react-native"
import { styles } from "./styles"

export function CardAvatarContainer({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.cardAvatarContainer}>
            <View style={styles.cardAvatarOverlay}>
                {children}
            </View>
        </View>
    )
}