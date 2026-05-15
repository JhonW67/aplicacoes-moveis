import { View } from "react-native";
import { styles } from "./styles";

export function FooterContainer({ children }: { children: React.ReactNode }){
    return(
        <View style={styles.footerContainer}>
            {children}
        </View>
    )
}