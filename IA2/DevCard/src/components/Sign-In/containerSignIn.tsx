import { View } from "react-native";
import { styles } from './styles';

export function ContainerSignIn({ children }: { children: React.ReactNode }) {
    return(
        <View style={styles.containerSignIn}>
            {children}
        </View>
    )
}