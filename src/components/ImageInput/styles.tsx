import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import {ColorSheet} from '../../utils/ColorSheet';

const styles = StyleSheet.create({
  root: {},
  container: {
    width: wp(20),
    height: hp(10),
    marginRight: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: ColorSheet.Border,
    borderRadius: 5,
    // backgroundColor: 'red'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
