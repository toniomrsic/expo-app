import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './opisproizvoda.style'

const OpisProizvoda = ({urlSlike, naziv, marka}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={{uri: urlSlike}} style={styles.logoImage}/> 
      </View>
      <View style={styles.naslovBox}>
        <Text style={styles.ime}>{naziv}</Text>
      </View>
      <View style={styles.kutija}>
        <Text style={styles.opisGlavni}>{marka}</Text>
        <View style={styles.kutija}>
        </View>
        
      </View>
    </View>
  );
};

export default OpisProizvoda;