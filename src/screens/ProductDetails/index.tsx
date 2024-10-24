import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ColorSheet} from '../../utils/ColorSheet';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import PrimaryButton from '../../components/PrimaryButton';

const ProductDetails = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'translucent'}
        translucent={true}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Main  */}
        <View style={styles.image_container}>
          {/* Image */}
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.tribune.com.pk/media/images/2-column-171599043154-0/2-column-171599043154-0.jpg',
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            activeOpacity={0.5}
            style={styles.back_button}>
            <Feather
              name="chevron-left"
              size={30}
              color={ColorSheet.Secondary}
            />
          </TouchableOpacity>
        </View>
        {/* Data Container */}
        <View style={styles.data_container}>
          <View style={styles.row_container}>
            <Image
              style={styles.image_pic}
              source={{
                uri: 'https://img.jagranjosh.com/images/2022/January/1812022/Virat-Kohli-Biography.jpg',
              }}
            />
            <Text style={styles.user_name_text}>Sk Sarujan</Text>
          </View>
          {/* Box Container -- 1*/}
          <View style={styles.border_box_container}>
            <View
              style={{
                padding: 10,
              }}>
              <Text style={styles.title_text}>
                Wedding Photographer in London
              </Text>
              <View style={styles.price_container}>
                <Text style={styles.price_text}>$1400.00</Text>
              </View>
              <Text style={styles.common_text}>
                {
                  'Virat Kohli is an Indian international cricketer who plays Test and ODI cricket for the Indian national team...'
                }
              </Text>
            </View>
            {/*  */}
            <View style={styles.box_text_container}>
              <Text style={styles.sub_text}>{'Aerial drone footage'}</Text>
              <Text style={styles.bold_text}>Yes</Text>
            </View>
            {/*  */}
            <View style={styles.box_text_container}>
              <Text style={styles.sub_text}>{'Express turnaround time'}</Text>
              <Text style={styles.bold_text}>14 days</Text>
            </View>
          </View>
          {/* Benefits */}
          <View style={styles.benefits_container}>
            <View>
              <Text style={styles.benefits_text}>{'Benefits'}</Text>
            </View>
            {/* Box Container -- 2*/}
            <View style={styles.border_box_container}>
              <View
                style={{
                  padding: 10,
                }}>
                <Text style={styles.common_text}>
                  {
                    'Actionable tips: I give you actionable tips & teach you how to do SEO.'
                  }
                </Text>
              </View>
              {/*  */}
              <View style={styles.second_box_text_container}>
                <Text style={styles.sub_second_text}>
                  {
                    'Actionable tips: I give you actionable tips & teach you how to do SEO.'
                  }
                </Text>
              </View>
              {/*  */}
              <View style={styles.second_box_text_container}>
                <Text style={[styles.sub_second_text]}>
                  {
                    'Actionable tips: I give you actionable tips & teach you how to do SEO.'
                  }
                </Text>
              </View>
            </View>
          </View>
          {/* button container */}
          <View style={styles.buy_button_container}>
            <PrimaryButton title={'Buy for $199'} onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
