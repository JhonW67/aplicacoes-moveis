import { Text } from "react-native"
import { styles } from "./styles";

type Props = {
    label: string
}
export function CardTitleRole({ label }: Props) {
    return (
        <Text style={styles.cardTitleRole}>{label}</Text>
    )
}