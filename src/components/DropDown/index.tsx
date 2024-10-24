import {
  Animated,
  StyleProp,
  Text,
  TextStyle,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styles from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import {ColorSheet} from '../../utils/ColorSheet';
import Entypo from 'react-native-vector-icons/Entypo';

interface MobileDropDownProps {
  data: any[];
  value: string;
  onChange: (item: {label: string; value: string}) => void;
  placeholder?: string;
  style?: any | string;
  dropDownStyle?: any | string;
  iconColor?: string | undefined;
  selectedTextStyle?: StyleProp<TextStyle>;
  textItemStyle?: any;
  dropdownPosition?: 'auto' | 'bottom' | 'top' | undefined;
  placeholderStyle?: StyleProp<TextStyle>;
  disable?: boolean | undefined;
  testID?: string | undefined;
  customRightIcon?: () => JSX.Element;
}

const AppDropDown = (props: MobileDropDownProps) => {
  const {
    data,
    value,
    onChange,
    placeholder,
    style,
    dropDownStyle,
    selectedTextStyle,
    textItemStyle,
    placeholderStyle,
    customRightIcon,
  } = props;

  const [focus, setFocus] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const toggleAnimate = () => {
    const config = {
      duration: 300,
      toValue: focus ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
  };

  const renderItem = (item: {label: string; value: string}) => {
    return (
      <View style={styles.item}>
        <Text
          style={[
            styles.textItem,
            // focus && { color: colors.primaryText },
            textItemStyle,
          ]}>
          {item.label}
        </Text>

        {item.value == value && (
          <Octicons
            style={styles.icon}
            // color = {colors.textInputBorderColor}
            name="check"
            size={20}
          />
        )}
      </View>
    );
  };
  const rightIcon = () => {
    return (
      <Animated.View
        style={{
          transform: [{rotate: arrowTransform}],
        }}>
        {customRightIcon?.() ?? (
          <Entypo name="chevron-down" size={20} color={ColorSheet.Secondary} />
        )}
      </Animated.View>
    );
  };

  return (
    <View
      style={[
        styles.dropdownView,
        focus && {
          borderBottomLeftRadius: hp(0),
          borderBottomRightRadius: hp(0),
          borderColor: ColorSheet.Border,
        },
        style,
      ]}>
      <Dropdown
        style={[styles.dropdown, dropDownStyle]}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        selectedTextStyle={[
          styles.selectedTextStyle,
          {
            color: value ? ColorSheet.BackButton : ColorSheet.Text, // Set the selected text color to white
          },
          selectedTextStyle,
        ]}
        containerStyle={styles.dropdownContainerStyle}
        iconStyle={styles.iconStyle}
        renderRightIcon={rightIcon}
        renderItem={renderItem}
        data={data}
        search={false}
        onFocus={() => {
          setFocus(true);
          toggleAnimate();
        }}
        onBlur={() => {
          setFocus(false);
          toggleAnimate();
        }}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </View>
  );
};

export default AppDropDown;
