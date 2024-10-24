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
  main_container: {
    flex: 1,
    padding: hp(2),
    // backgroundColor: 'pink'
  },
  main_row_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(1),
  },
  benefit_text: {
    color: ColorSheet.Secondary,
    fontSize: RFValue(14),
    fontWeight: '600',
  },
  text_add_button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  add_text: {
    color: ColorSheet.Blue,
    fontSize: RFValue(14),
    fontWeight: '700',
  },
  textInput: {
    marginBottom: hp(3),
  },
  row_container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contact_textInput: {
    width: '88%',
  },
  delete_button: {
    width: '12%',
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: ColorSheet.Error,
  },
  additional_row_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(4),
  },
  attribute_value_row_container: {
    marginTop: hp(3),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  common_textInput: {
    width: '48%'
  },
  value_delete_row_container: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  second_value_textInput: {
    width: '75%',
  },
  value_delete_button: {
    width: '25%',
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: ColorSheet.Error,
  },
  next_button_container: {
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
    // marginTop: hp(2),
  },
});

export default styles;
