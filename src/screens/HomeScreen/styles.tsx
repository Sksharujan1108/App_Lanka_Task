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
  image_container: {
    width: '92%',
    marginTop: hp(2),
    // backgroundColor: 'yellow'
  },
  row_container: {
    flexDirection: 'row',
    marginBottom: hp(1),
    gap: 20,
  },
  cover_photo_text: {
    width: wp(15),
    color: ColorSheet.Secondary,
    fontSize: RFValue(15),
    fontWeight: '600',
  },
  upload_photos_text: {
    color: ColorSheet.Text,
    fontSize: RFValue(14),
    fontWeight: '500',
  },
  price_header_text: {
    marginTop: hp(4),
    marginBottom: hp(2),
    color: ColorSheet.Secondary,
    fontSize: RFValue(14),
    fontWeight: '500',
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
