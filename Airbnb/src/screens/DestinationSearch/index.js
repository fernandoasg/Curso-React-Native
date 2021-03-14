import React, {useState} from 'react';
import {Text, View, TextInput, FlatList, Pressable} from 'react-native';
import styles from './styles.js';

import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import searchResults from '../../../assets/data/search';

const DestinationSearchScreen = (props) => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Input component */}
      <TextInput
        style={styles.textInput}
        placeholder="Onde você está indo?"
        value={inputText}
        onChangeText={setInputText}
      />
      {/* List of destination */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <Pressable onPress={navigation.navigate('Guest')} style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={25} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
