import { Text } from "react-native";
import { styles } from "./styles";

type Props = {
    label: string
}
export function Subtitle({ label }: Props) {
    return (
        <Text style={styles.subtitle}>{label}</Text>
    )
}