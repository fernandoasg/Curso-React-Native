import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles.js';

const Guests = (props) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfantis] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={styles.mainText}>Adults</Text>
            <Text style={styles.secondaryText}>Ages 13 or above</Text>
          </View>
          <View style={styles.buttons}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.textButton}>-</Text>
            </Pressable>
            <Text style={styles.textValue}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.textButton}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.mainText}>Children</Text>
            <Text style={styles.secondaryText}>Ages 2-12</Text>
          </View>
          <View style={styles.buttons}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={styles.textButton}>-</Text>
            </Pressable>
            <Text style={styles.textValue}>{children}</Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={styles.textButton}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
        <View>
          <Text style={styles.mainText}>Infants</Text>
          <Text style={styles.secondaryText}>Under 2</Text>
        </View>
        <View style={styles.buttons}>
          <Pressable
            onPress={() => setInfantis(Math.max(0, infants - 1))}
            style={styles.button}>
            <Text style={styles.textButton}>-</Text>
          </Pressable>
          <Text style={styles.textValue}>{infants}</Text>
          <Pressable
            onPress={() => setInfantis(infants + 1)}
            style={styles.button}>
            <Text style={styles.textButton}>+</Text>
          </Pressable>
        </View>
      </View>
      </View>

      <Pressable
        onPress={navigation.navigate('Home')}
        style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Search</Text>
      </Pressable>
    </View>
  );
};

export default Guests;
