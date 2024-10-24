import {View, Text, StatusBar, Alert} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Header from '../../components/Header';
import AppTextInput from '../../components/AppTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import AppDescriptionInput from '../../components/AppDescriptionInput';
import AppImageInput from '../../components/ImageInput';
import { ColorSheet } from '../../utils/ColorSheet';
import { useAppDispatch } from '../../redux/stateHooks';
import { setUserName, setUserDescription, setUserPrice, setUserImages } from '../../redux/slices/app_slice';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [image, setImage] = useState([
    {id: 1, image: null},
    {id: 2, image: null},
    {id: 3, image: null},
    {id: 4, image: null},
    {id: 5, image: null},
  ]);
  const [price, setPrice] = useState('');
  const [priceError, setPriceError] = useState('')

  // Function to update image in state
  const handleImagePress = (id: number, newImage: any) => {
    const updatedImages = image.map((img) =>
      img.id === id ? { ...img, image: newImage } : img
    );
    setImage(updatedImages);
  };

  const handleNext = () => {
    if (name =='') {
      Alert.alert('Please enter your name')
    } else if (description == '') {
      Alert.alert('Please enter description')
    } else if (price == '') {
      Alert.alert('Please enter price')
    } else {
      dispatch(setUserName(name));
      dispatch(setUserDescription(description));
      dispatch(setUserPrice(price));
      dispatch(setUserImages(image));
      navigation.navigate('AdditionalDetails');
    }
  };

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorSheet.Primary}
        translucent={true}
      />
      <Header 
        title="About" 
        onPress={() => {}}
      />
      <View style={styles.main_container}>
      {/* Name Input */}
      <AppTextInput 
        placeholder="Name" 
        value={name}
        onChangeText={(text) => {
          setName(text)
        }}
        errorText={nameError}
        onBlur={() => {
          if(name == '') {
            setNameError('Please enter your name')
          } else {
            setNameError('')
          }
        }}
      />
      {/* Description */}
      <AppDescriptionInput
        placeholder='Description'
        value={description}
        onChangeText={(text) => {
          setDescription(text)
        }}
        errorText={descriptionError}
        onBlur={() => {
          if(description == '') {
            setDescriptionError('Please enter description')
          } else {
            setDescriptionError('')
          }
        }}
      />
      {/* Picture */}
      <View style={styles.image_container}>
        <View style={styles.row_container}>
          <Text style={styles.cover_photo_text}>Cover Photos</Text>
          <Text style={styles.upload_photos_text}>(Upload up to 5 photos)</Text>
        </View>
        <AppImageInput
          data={image}
          onImagePress={handleImagePress} // Pass function to update image
        />
      </View>
      {/* Price Header*/}
      <Text style={styles.price_header_text}>Price</Text>
      {/* Price Input */}
      <AppTextInput 
        placeholder='$0.00' 
        value={price}
        onChangeText={(text) => {
          setPrice(text)
        }}
        errorText={priceError}
        onBlur={() => {
          if(price == '') {
            setPriceError('Please enter your name')
          } else {
            setPriceError('')
          }
        }}
      />
      {/* button container */}
      <View style={styles.next_button_container}>
        <PrimaryButton 
          title="Next" 
          onPress={handleNext}
        />
      </View>
      </View>
    </View>
  );
};

export default HomeScreen;
