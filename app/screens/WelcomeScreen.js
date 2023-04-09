import React from 'react';
import { 
    Image,
    ImageBackground,
    StyleSheet,
    View,
    Text
 } from 'react-native';

function WelcomeScreen() {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/background.jpg')}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo-red.png')}
                    />
                    <Text>
                        Sell What You Don't Need
                    </Text>
                </View>
                
                <View
                    style={styles.loginButton}>
                </View>
                <View
                    style={styles.registerButton}>
                </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1, //image in the full screen
        justifyContent:'flex-end',//using justify content we can align items along primary axis
        alignItems:'center'//align items on secondary axis
    },
   
    loginButton:{
        width:'100%',
        height:70,
        backgroundColor:'#fc5c65'

    },

    logo:{
        width:100,
        height:100,
    },

    logoContainer:{
        position:'absolute',
        top:70,
        alignItems:'center'
    },

    registerButton:{
        width:'100%',
        height:70,
        backgroundColor:'#4ecdc4'

    }
})
export default WelcomeScreen;