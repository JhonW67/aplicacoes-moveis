import { Text } from "react-native";
import { styles } from "./styles";

type Props = {
    label: string
}
export function Title({ label }: Props) {
    return (
        <Text style={styles.title}>{label}</Text>
    )
}