import { View } from "react-native";
import { styles } from "./styles";

type Props = {
    children: React.ReactNode
}
export function ContainerColor({ children }: Props){
    return(
        <View style={styles.containerColors}>
            {children}
        </View>
    )
}