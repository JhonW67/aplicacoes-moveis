import { View } from "react-native";
import { styles } from "./styles";
export function CardBadgeContainer({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.cardBadgeContainer}>
            {children}
        </View>
    );
}