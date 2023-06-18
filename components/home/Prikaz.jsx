

import { View,  } from 'react-native'



import { useRouter } from 'expo-router'






import PrikazProizvoda from '../common/slicice/PrikazProizvoda';
import styles from './prikaz.style'


const Prikaz = ({poslaniPodatci}) => {
  const router = useRouter();

  const podatci = poslaniPodatci

  return (

    <View style={styles.container}>
  
      <View style={{display:"flex",flexDirection:"row", flexWrap:"wrap",
       justifyContent:"space-around", alignContent:"space-between", rowGap:40 }}>
      {
       podatci?.map((proizvod)=>(<PrikazProizvoda
       proizvod={proizvod}
       key={`obicni-${proizvod.id}`}
       handleNavigate={() => router.push({pathname: `/detalji/detaljiProizvoda`, params: proizvod})}
       

       />
       
       ))
      
      }

      </View>
    </View>
  )
}

export default Prikaz