import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import {ColorSheet} from '../../utils/ColorSheet';

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorSheet.Blue,
    borderRadius: 5,
    marginVertical: hp(1),
    width: '100%',
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: ColorSheet.Primary,
    fontSize: RFValue(14),
    fontWeight: '600',
  },
});

export default styles;
