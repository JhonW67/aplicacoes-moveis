import { Text } from "react-native";
import { styles } from "./styles";

type Props = {
    label: string
}
export function CardTitle({ label }: Props){
    return(
        <Text style={styles.cardTitle}>{label}</Text>
    )
}