import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../app/detalji/slike'
import styles from './prikazproizvoda.style'


const PrikazProizvoda = ({proizvod, handleNavigate}) => {
  

  
  return (
    
    <TouchableOpacity 
    onPress={handleNavigate}
    > 
    <View>
      <View style={styles.logoContainer}
      >
        <Image loadingIndicatorSource={require('../../../assets/images/imotski.jpg')}
        source={{uri: checkImageURL(proizvod.id)}}     
        resizeMode='cover'
        style={styles.logoImage}
        
        />
        
      </View>
      </View>

      

    </TouchableOpacity>
  )
}

export default PrikazProizvoda