import { View } from "react-native";
import { styles } from "./style";

type HeaderContainerProps = {
    children: React.ReactNode
    variant?: "primary" | "secondary"
}
export function HeaderContainer({ children, variant = "primary" }: HeaderContainerProps){
    return(
        <View style={styles[variant].headerContainer}>
            {children}
        </View>
    )
}