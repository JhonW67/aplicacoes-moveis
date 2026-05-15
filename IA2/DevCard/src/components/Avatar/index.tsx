import { Text } from "react-native"
import { styles } from "./style"

type Props = {
    label: string
}

export function Avatar ({ label }: Props) {
    return (
        <Text style={styles.avatar}>{label}</Text>
    )
}