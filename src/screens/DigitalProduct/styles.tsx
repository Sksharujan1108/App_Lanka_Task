import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ColorSheet} from '../../utils/ColorSheet';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorSheet.Primary,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: hp(1),
  },
  main_container: {
    flex: 1,
    padding: hp(2),
    // backgroundColor: 'pink'
  },
});

export default styles;
