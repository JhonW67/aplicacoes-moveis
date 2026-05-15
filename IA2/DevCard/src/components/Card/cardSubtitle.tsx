import { Text } from "react-native";
import { styles } from "./styles";

type Props = {
    label: string
}

export function CardSubtitle({ label }: Props){
    return(
        <Text style={styles.cardSubtitle}>{label}</Text>
    )
}