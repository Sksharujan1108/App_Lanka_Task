import {Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import {ColorSheet} from '../../utils/ColorSheet';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: Platform.OS == 'android' ? hp(5) : 0,
    backgroundColor: ColorSheet.Primary,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(10),
    borderBottomColor: ColorSheet.Border,
    borderBottomWidth: 1,
  },
  button: {
    position: 'absolute',
    left: hp(2),
    backgroundColor: ColorSheet.Background,
    borderRadius: 50,
    height: hp(5),
    width: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: ColorSheet.Text,
    fontSize: RFValue(14),
    fontWeight: '500',
    textAlign: 'center',
    // backgroundColor: 'red'
  },
});

export default styles;
