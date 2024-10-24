import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ColorSheet} from '../../utils/ColorSheet';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorSheet.Primary,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: hp(1),
  },
  image_container: {
    flex: 0.5,
    backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: hp(40),
    zIndex: -1,
    resizeMode: 'cover',
  },
  back_button: {
    position: 'absolute',
    top: hp(8),
    left: hp(2),
    // backgroundColor: 'green'
  },
  data_container: {
    flex: 0.45,
    padding: hp(2),
    // backgroundColor: 'pink',
  },
  row_container: {
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image_pic: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
  },
  user_name_text: {
    fontSize: RFValue(14),
    fontWeight: '500',
    color: ColorSheet.Secondary,
  },
  border_box_container: {
    width: '100%',
    marginTop: hp(3),
    borderWidth: 1,
    borderColor: ColorSheet.Border,
    borderRadius: hp(1),
  },
  title_text: {
    fontSize: RFValue(14),
    fontWeight: '500',
    color: ColorSheet.Secondary,
  },
  price_container: {
    width: hp(14),
    height: hp(4),
    marginTop: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(1),
    backgroundColor: ColorSheet.BackButton,
  },
  price_text: {
    fontSize: RFValue(13),
    fontWeight: '500',
    color: ColorSheet.Primary,
  },
  common_text: {
    marginTop: hp(0.4),
    width: wp(80),
    fontSize: RFValue(13),
    fontWeight: '400',
    color: ColorSheet.Secondary,
    // backgroundColor: 'yellow',
  },
  box_text_container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(1),
    padding: hp(1),
    paddingHorizontal: hp(1.5),
    borderTopWidth: 0.5,
    borderColor: ColorSheet.Border,
  },
  sub_text: {
    fontSize: RFValue(13),
    fontWeight: '400',
    color: ColorSheet.Secondary,
  },
  bold_text: {
    fontSize: RFValue(14),
    fontWeight: '700',
    color: ColorSheet.Secondary,
  },
  benefits_container: {
    width: '100%',
    marginTop: hp(3),
  },
  benefits_text: {
    fontSize: RFValue(14),
    fontWeight: '600',
    color: ColorSheet.Secondary,
  },
  second_box_text_container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(1),
    paddingHorizontal: hp(1.5),
    borderTopWidth: 0.5,
    borderColor: ColorSheet.Border,
  },
  sub_second_text: {
    fontSize: RFValue(13),
    fontWeight: '400',
    color: ColorSheet.Secondary,
    marginBottom: hp(1.2),
  },
  buy_button_container: {
    marginTop: hp(3),
  },
});

export default styles;
