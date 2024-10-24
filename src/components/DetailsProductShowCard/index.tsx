import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import { GestureResponderEvent } from 'react-native';

interface DigitalProductShowCardProps {
  data: {
    id: number;
    image: string;
    description: string;
    price: string;
  }[];
  onPress: ((e: GestureResponderEvent) => void);
}

const DigitalProductShowCard = (Props: DigitalProductShowCardProps) => {
  const {data, onPress} = Props;
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity 
            style={styles.main_card}
            activeOpacity={0.5}
            onPress={onPress}
          >
            <View style={styles.image_container}>
              <Image style={styles.image} source={{uri: item.image}} />
              {/* price */}
              <View style={styles.price_container}>
                <Text style={styles.price_text}>{'$'}{item.price}</Text>
              </View>
            </View>
            <Text style={styles.title_text}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DigitalProductShowCard;
