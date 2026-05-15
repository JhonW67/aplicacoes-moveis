import { Text } from "react-native";
import { styles } from "./styles";

type Props = {
    label: string
}

export function CardText({ label }: Props) {
    return (
        <Text style={styles.cardText}>{label}</Text>
    )
}