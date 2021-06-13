import React from "react"
import {Text,View,SafeAreaView,StyleSheet,TouchableOpacity,Image} from "react-native"
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from "react-native-responsive-screen"

const InitialScreen = ({navigation}) => {
    return(
        <>
        <SafeAreaView style={styles.containerStyle}>
            <Text style={styles.headerText}>{`Complete \nHealth \nSolutions`}</Text>
            <Text style={styles.paragraphTextStyle}>{`Early Protection for \nfamily health`}</Text>
            <View>
                <Image 
                    source={require("../assets/images/doctor.png")}
                    style={styles.imageStyle}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate("Home")}
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:"#414833"
    },
    headerText:{
        color:"white",
        fontSize:hp("4%"),
        marginTop:hp("3%"),
        marginLeft:wp("5%"),
        fontWeight:"bold"
    },
    paragraphTextStyle:{
        color:"#e5e5e5",
        fontSize:hp("2%"),
        marginTop:hp("3%"),
        marginLeft:wp("5%")
    },
    buttonStyle:{
        backgroundColor:"white",
        marginLeft:wp("5%"),
        borderRadius:10,
        width : wp("40%")
    },
    buttonContainer:{
        flex:1,
        justifyContent:"flex-end",
        bottom : hp("6%")
    },
    buttonTextStyle:{
        color:"#333d29",
        padding:20,
        textAlign:"center",
        alignSelf:"center",
        fontSize:hp("2.2%"),
        fontWeight:"700"
    },
    imageStyle:{
        height:hp("40%"),
        width:wp("90%"),
        alignSelf:"center",
        borderRadius:20,
        marginHorizontal:wp("5%"),
        marginVertical:hp("3.5%"),
        
    }
})

export default InitialScreen