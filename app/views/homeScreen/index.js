import React from 'react';
import {SafeAreaView,Button,View,Text} from 'react-native';




function HomeScreen({navigation}){
    return(
        <SafeAreaView>
            <View>
                <Text>De aqui podemos partir a donde sea</Text>
            </View>
            <View>
                <Button onPress={()=>navigation.navigate("TodoDemo")} title="Ir a TodoDemo"/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;