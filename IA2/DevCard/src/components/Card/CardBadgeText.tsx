import { Text } from "react-native"
import { styles } from "./styles"

type Props = {
    label: string
}

export function CardBadgeText({ label }: Props){
    return(
        <Text style={styles.cardBadgeText}>{label}</Text>
    )
}