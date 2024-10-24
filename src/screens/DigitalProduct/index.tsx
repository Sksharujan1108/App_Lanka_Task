import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../components/Header';
import DigitalProductShowCard from '../../components/DetailsProductShowCard';
import {ScrollView} from 'react-native';
import {ColorSheet} from '../../utils/ColorSheet';
import { useAppSelector } from '../../redux/stateHooks';
import { selectAppDescription, selectAppImages, selectAppName, selectAppPrice, selectSampleDataSet2 } from '../../redux/slices/app_slice';

const DigitalProduct = ({navigation}: any) => {
  const sampleDataSet = useAppSelector(selectSampleDataSet2); // Dummy Data
  const ShowUserName = useAppSelector(selectAppName); // User-added Name
  const ShowUserDescription = useAppSelector(selectAppDescription); // User-added Description
  const ShowUserImages = useAppSelector(selectAppImages); // User-added Images
  const ShowUserPrice = useAppSelector(selectAppPrice); // User-added Price

  // Combine dummy data with user-added data
  const combinedData = [
    ...sampleDataSet,
    {
      id: sampleDataSet.length + 1,
      image: ShowUserImages[0]?.image ?? '', // You can pick an image from the images array
      title: ShowUserName, // Display the user-added name
      description: ShowUserDescription,
      price: ShowUserPrice, // Display the user-added price
    },
  ];
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorSheet.Primary}
        translucent={true}
      />
      <Header
        title="Digital Product"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        {/* Main  */}
        <View style={styles.main_container}>
          <DigitalProductShowCard 
            data={combinedData} 
            onPress={() => {
              navigation.navigate('ProductDetails');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DigitalProduct;