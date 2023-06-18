
import { Stack, useRouter } from "expo-router";
import {  View, SafeAreaView,  TextInput, ScrollView } from "react-native";
import {  useState, useEffect } from "react";
import { COLORS, icons, SIZES } from "../../constants";

import { ScreenHeaderBtn } from "../../components";

import styles from "../pocetna.style";
import proizvodi from "../../litsaProizvoda/proizvodi";
import {Prikaz} from "../../components";



const Search = () => {
    

    
    const router = useRouter();

    const [search, setSearch] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {  
        setFilteredDataSource(proizvodi);
        setMasterDataSource(proizvodi);
      }, []);

    const searchFilterFunction = (text) => {

        if (text) {
          const newData = masterDataSource.filter(function (item) {
            const itemData = item.naziv
              ? item.naziv.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };





    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{headerStyle: {backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerBackVisible: false,
        headerLeft: () => (
            <ScreenHeaderBtn
            iconUrl={icons.left}
            dimension="100%"
            handlePress={() => router.back()}
            />
        ),
        headerTitle: "Povratak"
        }}/>
        <>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View 
            style={{
                flex: 1, 
                padding: SIZES.medium}}>
                    
                    <View style={styles.container}>
                    
                    <View style={styles.searchContainer}>
                    <View style={styles.searchWrapper}>
                    <TextInput 
                    style={styles.searchInput}
                    value={search}
                    onChangeText={(text) => {searchFilterFunction(text)}}
                    placeholder='Pretraži proizvode'
                    />     
                    
        </View> 
      </View>
      <Prikaz poslaniPodatci={filteredDataSource}/>
            </View>
                    
            </View>
            
        </ScrollView>
        </>
        </SafeAreaView>
        
    )
}

export default Search;