import { Text, View, SafeAreaView } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";


import {OpisProizvoda, Footer,  ScreenHeaderBtn} from "../../components";
import {COLORS, icons, SIZES, FONT} from "../../constants";

import { ScrollView } from "react-native-gesture-handler";
import { checkImageURL } from "./slike";





const Detalji = () => {

    const proizvod = useLocalSearchParams();

    const router = useRouter();

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
        <ScrollView>

            <View style={{padding: SIZES.medium, paddingBottom: 100}}>
            <OpisProizvoda
                    urlSlike = {checkImageURL(proizvod.id)}
                    naziv = {proizvod.naziv}
                    marka = {proizvod.marka}
                
                />
                
                
            </View>
            <View style={{alignContent:"center"}}>
                <Text style={{alignSelf:"center",fontSize: SIZES.xxLarge + 25,
    color: COLORS.secondary,
    fontFamily: FONT.bold,
    marginLeft: 2,}}>{proizvod.cijena}</Text>

            </View>
  
        </ScrollView>
        <Footer url={proizvod.id} />
        </>

        </SafeAreaView>
    )


}

export default Detalji