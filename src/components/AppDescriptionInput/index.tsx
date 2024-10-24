import {View, Text, StyleProp, ViewStyle, TextStyle, NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import {ColorSheet} from '../../utils/ColorSheet';
import styles from './styles';

interface AppDescriptionInputProps {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  errorText?: string;
  textError?: StyleProp<TextStyle>;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const AppDescriptionInput = (props: AppDescriptionInputProps) => {
  const {style, placeholder, value, onChangeText, errorText, textError, onBlur} = props;
  return (
      <View style={[styles.container, style]}>
        <TextInput
          style={styles.textInput}
          textAlignVertical='top'
          placeholderTextColor={ColorSheet.Text}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          multiline={true}
          onBlur={onBlur}
        />
        <Text style={styles.number_text}>{'2000'}</Text>
        {errorText && (
          <Text style={[styles.error_text, textError]}>{errorText}</Text>
        )}
      </View>
  );
};

export default AppDescriptionInput;
