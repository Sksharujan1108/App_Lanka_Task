import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import {ColorSheet} from '../../utils/ColorSheet';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: 'red',
    marginVertical: hp(3),
  },
  textInput: {
    width: '100%',
    height: hp(10),
    padding: hp(1),
    fontSize: RFValue(14),
    fontWeight: '500',
    backgroundColor: ColorSheet.Background,
    borderRadius: 5,
  },
  number_text: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    fontSize: RFValue(12),
    fontWeight:'600',
    color: ColorSheet.Text
  },
  error_text :{
    fontSize: RFValue(12),
    color: ColorSheet.Error
  },
});

export default styles;
