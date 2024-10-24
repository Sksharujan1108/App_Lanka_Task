import { Alert, Image, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ColorSheet } from '../../utils/ColorSheet'
import { FlatList } from 'react-native'
import {launchImageLibrary} from 'react-native-image-picker'; // Import the image picker

interface AppImageInputProps {
  data: {
    id: number,
    image: any
  }[]
  onImagePress: (id: number) => void;
}

const AppImageInput = (props: AppImageInputProps) => {
  const { data, onImagePress } = props;
  // Limit data to the first 5 items
  const limitData = data.slice(0, 5);

  // Function to pick an image
  const pickImage = (id: number) => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.error('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets[0].uri) {
        const selectedImageUri = response.assets[0].uri;
        onImagePress(id, selectedImageUri); // Update the image
      }
    });
  };

  return (
    <View style = {styles.root}>
      <FlatList
        data = {limitData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem = {({item}) => {
          return (
            <View style = {styles.container}>
              {item.image ? (
                <Image
                 style = {styles.image}
                 source={item.image}
                />
              ) : (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => pickImage(item.id)} // Trigger image picking
                >
                  <MaterialIcons name="add" size={25} color={ColorSheet.Blue} />
                </TouchableOpacity>
              )}
            </View>
          )
        }}
      />
    </View>
  )
}

export default AppImageInput;