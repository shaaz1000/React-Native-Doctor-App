import React from 'react';
import {Text,SafeAreaView,StyleSheet,View,TouchableOpacity,Image,ScrollView,Platform,Linking} from "react-native"
import { heightPercentageToDP as hp , widthPercentageToDP as wp} from 'react-native-responsive-screen';
import moment from 'moment'
const DoctorDetailScreen = ({navigation,route}) => {
    
    const {item} = route.params
    const today = moment().format(`DD-MM`)
    const secondDay = moment().add(1,"days").format("DD-MM")
    const thirdDay = moment().add(2,"days").format("DD-MM")
    const fourthDay = moment().add(3,"days").format("DD-MM")
    const fifthDay = moment().add(4,"days").format("DD-MM")

    const openDial = () => {
        console.log("hello")
        //Platform.OS === "ios" ? Linking.openURL("telprompt:9619537704") : Linking.openURL("tel:9619537704")
        Linking.openURL(`sms:&addresses=+919619537704&body=I want to book an appointment for tomorrow doctor`)
    }
    return(
        <>
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.navbar}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image 
                    source={require("../assets/images/back.png")}
                    style={styles.navbarBackButton}
                />
            </TouchableOpacity>
        </View>
        <View style={styles.DoctorInformationContainer}>
            <View style={styles.DoctorDetailsContainer}>
                <Text style={styles.DoctorName}>{item.DoctorName}</Text>
                <Text style={[styles.DoctorName,{fontSize:hp("1.69%"),color:"grey",marginTop:hp("0.7%")}]}>{item.Speciality}</Text>
                <View style={{flexDirection:"row",marginTop:hp("2.5%")}}>
                    <View style={styles.starContainer}>
                        <Image source={require("../assets/images/star.png")}  style={styles.starRating}/>
                    </View>
                    <View style={{marginHorizontal:wp("2%")}}>
                        <Text style={styles.RatingHeader}>Ratings</Text>
                        <Text style={styles.RatingName}>{item.Rating} from 5</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:hp("2.5%")}}>
                    <View style={styles.starContainer}>
                        <Image source={require("../assets/images/group.png")}  style={styles.starRating}/>
                    </View>
                    <View style={{marginHorizontal:wp("2%")}}>
                        <Text style={styles.RatingHeader}>Patient</Text>
                        <Text style={styles.RatingName}>120+</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.callButton} onPress={openDial}>
                    <Text style={styles.CallTextStyle}>Call Doctor</Text>
                </TouchableOpacity>
            </View>
            <Image
                source={{uri:"https://i.pinimg.com/originals/2a/0e/8c/2a0e8cb609405d9ca87bc81154b9c443.jpg"}}
                style={styles.DoctorImage}
            />
        </View>
        <View style={styles.DoctorBioContainer}>
            <Text style={styles.biographyHeader}>Biography</Text>
            <Text style={styles.bioInformation}>Dr {item.DoctorName} is a very well renown doctor and have till now treated 120+ doctor is a very short span of time.
            She has completed her M.B.B.S from JJ College and then pursued her Md in {item.Speciality} from America. She is set to be the youngest 
            doctor to achieve this milestone.
            </Text>
        </View>
        <View style={styles.DoctorBioContainer}>
            <Text style={styles.biographyHeader}>Schedule</Text>
            <View style={styles.scheduleRow}>
                <View style={styles.scheduleDate}>
                    <Text style={styles.dateStyle}>{today}</Text>
                </View>
                <View style={styles.scheduleDate}>
                    <Text style={styles.dateStyle}>{secondDay}</Text>
                </View>
                <View style={styles.scheduleDate}>
                    <Text style={styles.dateStyle}>{thirdDay}</Text>
                </View>
                <View style={styles.scheduleDate}>
                    <Text style={styles.dateStyle}>{fourthDay}</Text>
                </View>
                <View style={styles.scheduleDate}>
                    <Text style={styles.dateStyle}>{fifthDay}</Text>
                </View>
            </View>
        </View>
        </ScrollView>
        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Make an appointment</Text>
        </TouchableOpacity>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"white"
    },
    navbar:{
        marginTop:hp("2%")
    },
    navbarBackButton:{
        height:20,
        width:20,
        borderRadius:10,
        //fontWeight:"bold",
        marginLeft:wp("5%")
    },
    DoctorInformationContainer:{
        marginTop:hp("2%"),
        flexDirection:"row"
    },
    DoctorDetailsContainer:{
        marginHorizontal:wp("3.5%")
    },
    DoctorName:{
        fontSize:hp("2.3%"),
        color:"black"
    },
    starRating:{
        height:30,
        width:30,
        alignSelf:"center",
        marginVertical:hp("1%")
    },
    starContainer:{
        height:50,
        width:50,
        backgroundColor:"white",
        shadowOpacity:0.3,
        shadowOffset:{
            width:0,
            height:3
        },
        shadowColor:"black",
        shadowRadius:3,
        borderRadius:10
    },
    RatingHeader:{
        color:"grey",
        fontSize:hp("1.5%"),
        fontWeight:"400"
    },
    RatingName:{
        color:"black",
        fontSize:hp("1.8%"),
        fontWeight:"600",
    },
    DoctorImage:{
        marginLeft:wp("10%"),
        height:hp("40%"),
        width:wp("50%"),
        bottom:hp("6%")
    },
    DoctorBioContainer:{
        marginVertical:hp("1%"),
        marginHorizontal:wp("4%"),
        backgroundColor:"white",
        shadowColor:"#d8e2dc",
        shadowOffset:{
            height:10,
            width:5
        },
        shadowOpacity:0.5,
        shadowRadius:0.6,
        borderRadius:15
    },
    bioInformation:{
        marginTop:hp("0.8%"),
        color:"grey",
        fontSize:hp("1.6%"),
        padding:hp("1.5%")
    },
    biographyHeader:{
        fontSize:hp("2.2%"),
        color:"black",
        fontWeight:"500",
        textAlign:"justify",
        padding:hp("1.5%")
    },
    scheduleRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:wp("1.5%")
    },
    scheduleDate:{
        height:50,
        width:60,
        marginVertical:hp("1.5%"),
        shadowColor:"#168aad",
        shadowOpacity:0.2,
        shadowOffset:{
            height:5,
            width:0
        },
        shadowRadius:0.1,
        backgroundColor:"white",
        borderRadius:10
    },
    dateStyle:{
        fontWeight:"600",
        textAlign:"center",
        alignSelf:"center",
        textAlignVertical:"center",
        fontSize:hp("1.7%"),
        top:hp("0.5%")
    },
    buttonStyle:{
        marginHorizontal:wp("5%"),
        marginVertical:hp("1%"),
        borderRadius:10,
        backgroundColor:"#6b705c",
        borderColor:"#ffe5d9",
        borderWidth:hp("0.3%")
    },
    buttonTextStyle:{
        color:"white",
        fontSize:hp("2.3%"),
        alignSelf:"center",
        textAlign:"center",
        padding:hp("0.7%"),
        fontWeight:"400",
        padding:hp("2%")
        
    },
    callButton:{
        borderRadius:10,
        padding:hp("1%"),
        paddingHorizontal:wp("1%"),
        borderWidth:1,
        borderColor:"#e63946",
        marginVertical:hp("1.5%")
    },
    CallTextStyle:{
        alignSelf:"center",
        color:"#6b705c",
        fontWeight:"600",
        alignSelf:"center"
    }
})

export default DoctorDetailScreen