/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const Post = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'https://dummyimage.com/vga'}}
      />

      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      <Text style={styles.description} numberOfLines={2}>
        Entire flat, Puerto de la cruz lrm ofi pdfsopdfias doasimdoas idaoism
        daosimda soidmasod imasodiamsdoa ismdoasidmaosidm asoidmasod imasdoim
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.price}> $30</Text>
        / night
      </Text>

      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
