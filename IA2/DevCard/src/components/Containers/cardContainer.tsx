import { View } from "react-native"
import { styles } from "./styles"

type Props = {
    children: React.ReactNode;
    backgroundColor?: string;
}
export function CardContainer({ children, backgroundColor }: Props) {
    return (
        <View style={[styles.cardContainer, { backgroundColor }]}>
            {children}
        </View>
    )
}