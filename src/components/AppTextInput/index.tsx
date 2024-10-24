import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';
import {ColorSheet} from '../../utils/ColorSheet';

interface AppTextInputProps {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  errorText?: string;
  textError?: StyleProp<TextStyle>;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  inputContainer?: StyleProp<ViewStyle>;
  placeholderTextColor?: string;
}

const AppTextInput = (props: AppTextInputProps) => {
  const {
    style,
    placeholder,
    value,
    onChangeText,
    errorText,
    textError,
    onBlur,
    inputContainer,
    placeholderTextColor,
  } = props;

  // Use either the provided `placeholderTextColor` or default to `ColorSheet.Text`
  const placeholderColor = placeholderTextColor || ColorSheet.Text;

  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={[styles.textInput, inputContainer]}
        placeholderTextColor={placeholderColor}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
      {errorText && (
        <Text style={[styles.error_text, textError]}>{errorText}</Text>
      )}
    </View>
  );
};

export default AppTextInput;
