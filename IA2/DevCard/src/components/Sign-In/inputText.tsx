import { KeyboardTypeOptions, Text, TextInput } from 'react-native';
import { styles } from './styles';

type Props = {
  label?: string
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  error?: string
  keyboardType?: KeyboardTypeOptions
}

export function InputText({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  keyboardType = "default"
}: Props){
  return(
    <>
      {label && <Text style={styles.inputLabel}>{label}</Text>}

      <TextInput 
        style={[
          styles.inputText,
          error && styles.inputError
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />

      {error && <Text style={styles.msgError}>{error}</Text>}
    </>
  )
}