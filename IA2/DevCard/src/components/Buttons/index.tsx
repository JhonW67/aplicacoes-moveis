import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import { styles } from "./style";

type ButtonProps = {
    label: string,
    onPress?: (event: GestureResponderEvent) => void
}
export function Button({ label, onPress }: ButtonProps){
    return(
        <TouchableOpacity  onPress={onPress} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )   
}