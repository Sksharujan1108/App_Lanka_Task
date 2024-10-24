import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import {ColorSheet} from '../../utils/ColorSheet';

const styles = StyleSheet.create({
    main_card: {
        flexDirection: 'column',
        gap: 3,
        width: '95%',
        height: hp(55),
        marginBottom: hp(3),
        alignSelf: 'center',
        // backgroundColor: 'red',
    },
    image_container: {
        width: '100%',
        height: hp(50),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor : 'yellow'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
        resizeMode: 'cover',
    },
    price_container: {
        position: 'absolute',
        bottom: 10,
        right: 15,
        backgroundColor: ColorSheet.Primary,
        width: wp(18),
        alignItems: 'center',
        justifyContent: 'center',
        height: hp(4),
        borderRadius: 5,
    },
    price_text: {
        color: ColorSheet.Secondary,
        fontSize: RFValue(13),
        fontWeight: '600',
    },
    title_text: {
        color: ColorSheet.Secondary,
        fontSize: RFValue(13),
        fontWeight: '700',
    },
});

export default styles;
