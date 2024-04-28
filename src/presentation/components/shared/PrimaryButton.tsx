import { Platform, Pressable, PressableProps, StyleSheet, Text } from "react-native"

interface Props {
  label: string
  onPress?: () => void
  onLongPress?: () => void
}

export const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      style={({pressed}) => [
        styles.button,
        pressed && styles.buttonPressed
      ]}>
        <Text
        style={{ color: Platform.OS === 'android' ? 'black' : 'white'}}>
          {label}
        </Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#42ff78' : '#5856D6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#3bdb68' : '#4746AB'
  }
})
