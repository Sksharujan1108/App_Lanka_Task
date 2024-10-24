import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';
import AppTextInput from '../../components/AppTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ColorSheet} from '../../utils/ColorSheet';
import AppDropDown from '../../components/DropDown';

const AdditionalDetails = ({navigation}: any) => {
  const [politics, setPolitics] = useState('');
  const [politicsError, setPoliticsError] = useState('');

  const [religion, setReligion] = useState('');
  const [religionError, setReligionError] = useState('');

  const [contact, setContact] = useState('');
  const [contactError, setContactError] = useState('');

  const [additionalForm, setAdditionalForm] = useState({
    attribute: '',
    value: '',
  });

  const [category, setCategory] = useState({
    label: '',
    value: '',
  });

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={ColorSheet.Primary}
        translucent={true}
      />
      <Header
        textStyle={{
          width: '20%',
        }}
        title="Additional details"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.main_container}>
        {/* row container */}
        <View style={styles.main_row_container}>
          <Text style={styles.benefit_text}>Benefits</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {}}
            style={styles.text_add_button}>
            <MaterialIcons name="add" size={20} color={ColorSheet.Blue} />
            <Text style={styles.add_text}>Add</Text>
          </TouchableOpacity>
        </View>
        {/* Politics Input */}
        <AppTextInput
          style={styles.textInput}
          placeholder="Avoid talking about politics"
          placeholderTextColor={ColorSheet.BackButton}
          value={politics}
          onChangeText={text => {
            setPolitics(text);
          }}
          errorText={politicsError}
          onBlur={() => {
            if (politics == '') {
              setPoliticsError('Please enter Politics');
            } else {
              setPoliticsError('');
            }
          }}
        />
        {/* Religion */}
        <AppTextInput
          style={styles.textInput}
          placeholder="Avoid talking about religion"
          placeholderTextColor={ColorSheet.BackButton}
          value={religion}
          onChangeText={text => {
            setReligion(text);
          }}
          errorText={religionError}
          onBlur={() => {
            if (religion == '') {
              setReligionError('Please enter Religion');
            } else {
              setReligionError('');
            }
          }}
        />
        {/* Contact Input */}
        <View style={styles.row_container}>
          <AppTextInput
            style={styles.contact_textInput}
            placeholder="If anyone want to contact they can go"
            placeholderTextColor={ColorSheet.BackButton}
            value={contact}
            onChangeText={text => {
              setContact(text);
            }}
            errorText={contactError}
            onBlur={() => {
              if (contact == '') {
                setContactError('Please enter contact');
              } else {
                setContactError('');
              }
            }}
          />
          {/* Delete */}
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {}}
            style={styles.delete_button}>
            <AntDesign name="delete" size={22} color={ColorSheet.Primary} />
          </TouchableOpacity>
        </View>
        {/* Additional Details Add*/}
        <View style={styles.additional_row_container}>
          <Text style={styles.benefit_text}>Additional details</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {}}
            style={styles.text_add_button}>
            <MaterialIcons name="add" size={20} color={ColorSheet.Blue} />
            <Text style={styles.add_text}>Add</Text>
          </TouchableOpacity>
        </View>
        {/* row container --- 1*/}
        <View style={styles.attribute_value_row_container}>
          <AppTextInput
            style={styles.common_textInput}
            placeholder="Attribute"
            value={additionalForm.attribute}
            onChangeText={text => {
              setAdditionalForm({
                ...additionalForm,
                attribute: text,
              });
            }}
          />
          <AppTextInput
            style={styles.common_textInput}
            placeholder="Value"
            value={additionalForm.value}
            onChangeText={text => {
              setAdditionalForm({
                ...additionalForm,
                value: text,
              });
            }}
          />
        </View>
        {/* row container --- 2*/}
        <View style={styles.attribute_value_row_container}>
          <AppTextInput
            style={styles.common_textInput}
            placeholder="Attribute"
            value={additionalForm.attribute}
            onChangeText={text => {
              setAdditionalForm({
                ...additionalForm,
                attribute: text,
              });
            }}
          />
          <View style={styles.value_delete_row_container}>
            <AppTextInput
              style={styles.second_value_textInput}
              placeholder="Value"
              value={additionalForm.value}
              onChangeText={text => {
                setAdditionalForm({
                  ...additionalForm,
                  value: text,
                });
              }}
            />
            {/* Delete */}
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {}}
              style={styles.value_delete_button}>
              <AntDesign name="delete" size={22} color={ColorSheet.Primary} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Drop Down */}
        <AppDropDown
          data={data}
          placeholder="Category"
          value={category.value}
          onChange={item => {
            setCategory(item);
          }}
        />
        {/* button container */}
        <View style={styles.next_button_container}>
          <PrimaryButton
            title="Next"
            onPress={() => {
              navigation.navigate('DigitalProduct');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AdditionalDetails;

const data = [
  {label: 'card', value: '1'},
  {label: 'label', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
];
