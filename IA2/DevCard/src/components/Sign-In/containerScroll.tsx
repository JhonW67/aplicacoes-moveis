import { ScrollView } from "react-native";
import { styles } from "./styles";

export function ContainerScroll({ children }: { children: React.ReactNode }) {
    return (
        <ScrollView style={styles.containerScroll}>
            {children}
        </ScrollView>
    );
}