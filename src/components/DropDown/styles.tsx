import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { ColorSheet } from '../../utils/ColorSheet';

const styles = 
  StyleSheet.create({
    dropdownView: {
        width: '100%',
        height: hp(5),
        marginTop: hp(3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: hp(1),
        borderWidth: 1,
        borderColor: ColorSheet.Border,
        backgroundColor: ColorSheet.Background
        
        // backgroundColor: 'red'
    },
    dropdown: {
        width: '100%',
        paddingLeft: hp(2),
        paddingRight: hp(1),
        // backgroundColor: 'green'
    },
    item: {
        padding: hp(1),
        marginTop: hp(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'red'
    },
    textItem: {
        fontSize: RFValue(14),
        fontWeight: '500',
        color: ColorSheet?.BackButton,
    },
    icon: {
        marginRight: hp(1),
    },

    placeholderStyle: {
        fontSize: RFValue(14),
        color: ColorSheet?.Secondary,
        fontWeight: '400',
    },
    selectedTextStyle: {
        fontSize: RFValue(14),
        fontWeight: '400',
        color: ColorSheet?.Secondary,
    },
    dropdownContainerStyle: {
        // backgroundColor: 'green',
        borderBottomLeftRadius: hp(1),
        borderBottomRightRadius: hp(1),
        borderColor: ColorSheet?.Border,
        borderWidth: 1,
        marginTop: hp(3),
        padding: hp(1),
    },
    iconStyle: {
        width: wp(20),
        height: hp(20),
    },
  });

export default styles;
