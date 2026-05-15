import { Text, TouchableOpacity } from 'react-native';
import { GestureResponderEvent } from 'react-native';
import { styles } from './styles';

type Props = {
  color: string,
  isActive?: boolean,
  onPress?: (event: GestureResponderEvent) => void  
}

export function ColorButton({ color, onPress, isActive }: Props){
    return(
        <TouchableOpacity 
            style={[
              styles.btnColor,
              isActive && styles.active
            ]} 
            onPress={onPress}
        >
            <Text>{color}</Text>
        </TouchableOpacity>
    )
}