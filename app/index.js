import { useState, useEffect } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import proizvodi from "../litsaProizvoda/proizvodi"

import { Stack, useRouter } from "expo-router";
;

import styles from './pocetna.style'
import { COLORS, icons,  SIZES } from '../constants';
import { Prikaz, ScreenHeaderBtn } from "../components"; 




const Home = () => {

    const router = useRouter();
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {  
        setFilteredDataSource(proizvodi);
        setMasterDataSource(proizvodi);
      }, []);

    



    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{headerStyle: { backgroundColor:COLORS.lightWhite },
        headerShadowVisible: false,
        headerRight: () => (
            <ScreenHeaderBtn iconUrl = {icons.search} style={styles.searchBtn} dimension ="100%" handlePress={() => router.push({pathname: "/detalji/search"})}/>
        ),
        headerTitle: ""
        }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
            <View 
            style={{
                flex: 1, 
                padding: SIZES.medium}}>
                    <View>
                        <View style={styles.container}>
                        <Text style={styles.headerTitle}>Dobar dan, Tonio!</Text>
                        <Text style={styles.welcomeMessage}>Pregledaj sve proizvode</Text>
                        </View></View>
                    
                    
            </View>
                    <Prikaz poslaniPodatci={filteredDataSource}/>
                    
                    
            
        </ScrollView>

        </SafeAreaView>
    )
}

export default Home;