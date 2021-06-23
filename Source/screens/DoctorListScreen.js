import React from 'react';
import {Text,SafeAreaView,StyleSheet,View,TouchableOpacity,Image} from "react-native"
import GlobalStyles from "../global/globalStyle"
import {IconButton} from "react-native-paper"
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from "react-native-responsive-screen"

const DoctorListScreen = ({navigation,route}) => {
    return(
        <>
        <SafeAreaView style={GlobalStyles.mainContainer}>
            <View style={styles.navBarMenu}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image
                    source={require("../assets/images/back.png")}
                    style={styles.navBarBackButton}
                />
                </TouchableOpacity>
                <Text style={styles.OurDoctorText}>Our Doctors</Text>
                <IconButton
                        icon="magnify"
                        color="#656d4a"
                        size={28}
                        //style={{bottom:hp("1%")}}
                        onPress={() => {
                            console.log("Hi")
                        }}
                    />
            </View>
            <View style={styles.FindDoctorContainer}>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={require("../assets/images/stethoscope.png")}
                            style={styles.imageStethoscope}
                        />
                    </View>
                    <View style={{marginHorizontal:hp("2%"),width:wp("70%")}}>
                        <Text style={[styles.OurDoctorText,{fontSize:hp("1.9%"),color:"white",marginTop:hp("0.5%")}]}>Find Doctors</Text>
                        <Text style={[styles.OurDoctorText,{fontSize:hp("1.6%"),color:"white",marginTop:hp("0.5%")}]}>Use this feature to find doctors near to you</Text>
                    </View>
                </View>
                <Image
                    source={require("../assets/images/maps.jpg")}
                    style={styles.mapStyle}
                />
            </View>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    navBarMenu:{
        
        justifyContent:"space-between",
        flexDirection:"row"
    },
    navBarBackButton:{
        height:24,
        width:24,
        borderRadius:12,
        padding:5,
        marginTop:hp("2%"),
        marginLeft:wp("2%")
    },
    OurDoctorText:{
        fontSize:hp("2.5%"),
        marginTop:hp("2%"),
        fontWeight:"600",
        color:"#1d3557"
    },
    FindDoctorContainer:{
        marginHorizontal:wp("5%"),
        marginTop:hp("2%"),
        borderRadius:10,
        padding:hp("1%"),
        backgroundColor:"#414833",
        shadowOffset:{
            height:4,
            width:0
        },
        shadowColor:"#99e2b4",
        shadowOpacity:0.2,
        shadowRadius:0.2
    },
    imageStethoscope:{
        height:50,
        width:50,
        margin:hp("1%"),
        alignSelf:"center",
    },
    imageContainer:{
        height:60,
        width:60,
        borderRadius:10,
        backgroundColor:"white",
        shadowOpacity:1,
        shadowRadius:1,
        shadowColor:"grey",
        shadowOffset:{
            height:5,
            width:0
        }
    },
    mapStyle:{
        margin:hp("1.5%"),
        borderRadius:10,
        height:hp("20%"),
        width:wp("80%"),
        alignSelf:"center",
        padding:hp("1%"),
        
    }
})

export default DoctorListScreen