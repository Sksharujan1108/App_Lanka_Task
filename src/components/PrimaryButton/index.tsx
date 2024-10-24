import {View, Text, TouchableOpacity, GestureResponderEvent} from 'react-native';
import React from 'react';
import styles from './styles';

interface PrimaryButtonProps {
  title: string;
  onPress?: ((e: GestureResponderEvent) => void);
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
