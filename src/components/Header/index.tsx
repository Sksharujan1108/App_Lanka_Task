import {View, Text, TouchableOpacity, GestureResponderEvent, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {ColorSheet} from '../../utils/ColorSheet';
import { TextProps } from 'react-native-svg/lib/typescript/lib/extract/extractText';

interface HeaderProps {
  title: string;
  onPress?: ((e: GestureResponderEvent) => void);
  textStyle?: StyleProp<TextStyle>;
}

const Header = (props: HeaderProps) => {
  const {title, onPress, textStyle} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={onPress} 
        activeOpacity={0.5}
        style={styles.button}>
        <Feather name="chevron-left" size={30} color={ColorSheet.BackButton} />
      </TouchableOpacity>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </View>
  );
};

export default Header;
