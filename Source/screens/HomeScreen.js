import React,{useState} from "react";
import { SafeAreaView,Text,StyleSheet,View, TextInput,Image,Linking,ScrollView, TouchableOpacity} from "react-native"
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from "react-native-responsive-screen"
import {IconButton,Divider} from "react-native-paper"
import GlobalStyles from "../global/globalStyle"
const HomeScreen = ({navigation}) => {
    const [PlaceholderText,setText] = useState("")
    const [isFocus,setIsFocus] = useState(false)
    const Data = [
        {
            id:1,
            DoctorName:"Dr Shaaz Khan",
            Speciality:"Cardiologist",
            Rating : 5,
            imageLink:"https://thumbs.dreamstime.com/b/nurse-doctor-woman-super-hero-medical-concept-female-healthcare-professional-as-superhero-flying-air-wearing-face-182234696.jpg"
        },
        {
            id:2,
            DoctorName:"Dr Sanjay Jaiswal",
            Speciality:"Neurologist",
            Rating : 4,
            imageLink:"https://thumbs.dreamstime.com/b/nurse-doctor-woman-super-hero-medical-concept-female-healthcare-professional-as-superhero-flying-air-wearing-face-182234696.jpg"
        },
        {
            id:3,
            DoctorName:"Dr Niranjan Hiranandani",
            Speciality:"Paediatric",
            Rating : 4,
            imageLink:"https://thumbs.dreamstime.com/b/nurse-doctor-woman-super-hero-medical-concept-female-"
        },
        {
            id:4,
            DoctorName:"Dr Sandeep Jha",
            Speciality:"Cardiologist",
            Rating : 5,
            imageLink:"https://thumbs.dreamstime.com/b/nurse-doctor-woman-super-hero-medical-concept-female-healthcare-professional-as-superhero-flying-air-wearing-face-182234696.jpg"
        },
        {
            id:5,
            DoctorName:"Dr Madhu",
            Speciality:"Gynaecologist",
            Rating : 3,
            imageLink:"https://thumbs.dreamstime.com/b/nurse-doctor-woman-super-hero-medical-concept-female-healthcare-professional-as-superhero-flying-air-wearing-face-182234696.jpg"
        },
    ]
    const openMessage = () => {
        //console.log("hello")
        //Platform.OS === "ios" ? Linking.openURL("telprompt:9619537704") : Linking.openURL("tel:9619537704")
        Linking.openURL(`sms:&addresses=null&body=I want to book an appointment for tomorrow doctor`)
    }
    return(
        <>
        <SafeAreaView style={GlobalStyles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.helloText}>Hello</Text>
            <View style={styles.greetingContainer}>
                <Text style={styles.nameText}>Shaaz</Text>
                <IconButton
                    icon="bell-outline"
                    color="#656d4a"
                    size={28}
                    style={{bottom:hp("1%")}}
                    onPress={() => console.log('Pressed')}
                />
            </View>
            <View style={styles.searchBarContainer}>
                <View style={{flexDirection:"row"}}>
                    
                        <IconButton
                        icon="magnify"
                        color="#656d4a"
                        size={28}
                        //style={{bottom:hp("1%")}}
                        onPress={() => {
                            console.log(isFocus)
                            setIsFocus(true)
                            console.log(isFocus)
                        }}
                    />
                    
                    
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#4a4e69"
                        onChangeText={(text)=>{
                            setText(text)
                        }}
                        style={styles.searchInputStyle}
                        autoCorrect={false}
                        autoFocus={isFocus}
                    />
                </View>
            </View>
            <View style={styles.updateBoxContainer}>
                <View style={{flexDirection:"row"}}>
                    <View>
                        <Image
                            source={{uri:"https://www.nebraskamed.com/sites/default/files/2020-04/Masks-Dos-Donts_FeaturedTile.jpg"}}
                            style={styles.updateBoxImage}
                        />
                    </View>
                    <View>
                        <Text style={styles.updateBoxMessageText}>{`You are invited to join live \nstream with`}<Text style={{fontWeight:"900"}}> Dr Shaaz</Text></Text>
                        <Divider
                            style={styles.dividerText}
                        />
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.messageText}>120k people are going to join this live stream!</Text>
                    <Image
                            style={styles.messageBoxImage}
                            source={{uri:"https://image.freepik.com/free-vector/vector-avatar-smiling-man-facial-expression_102172-203.jpg"}}
                        />
                    </View>
            </View>

            <View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={[styles.nameText,{fontWeight:"bold"}]}>Our Doctors</Text>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate("Doctor List")}
                    >
                        <Text style={styles.viewAllText}>View All</Text>
                    </TouchableOpacity>
                </View>
                {Data.map(item=>{
                    return(
                        <View key={item.id}>
                        <TouchableOpacity onPress={()=>navigation.navigate("Doctor Detail",{
                            item
                        })}
                        
                        >
                        <View style={styles.doctorListContainer}>
                            
                            <View style={styles.doctorNameList}>
                                <View style={{flexDirection:"row"}}>
                                    <View>
                                        <Image
                                            source={require("../assets/images/MaleDoctor.jpg")}
                                            style={styles.DoctorListImage}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.DoctorNameStyle}>{item.DoctorName}</Text>
                                        <Text style={[styles.DoctorNameStyle,{color:"grey",fontWeight:"400",marginTop:hp("0.3%")}]}>{item.Speciality}</Text>
                                        {
                                            item.Rating === 4 ?
                                            <View style={{flexDirection:"row",marginTop:hp("0.5%")}}>
                                                <Image source={require("../assets/images/star.png")} style={styles.startRating}/> 
                                                <Image source={require("../assets/images/star.png")} style={styles.startRating}/> 
                                                <Image source={require("../assets/images/star.png")} style={styles.startRating}/> 
                                                <Image source={require("../assets/images/star.png")} style={styles.startRating}/> 
                                            </View>
                                            :
                                            item.Rating === 3 ?
                                            <View style={{flexDirection:"row",marginTop:hp("0.5%")}}>
                                                <Image source={require("../assets/images/star.png")} style={styles.startRating}/>
                                                <Image source={require("../assets/images/star.png")} style={styles.startRating}/>
                                                <Image source={require("../assets/images/star.png")} style={styles.startRating}/>
                                            </View>
                                            :
                                            <View style={{flexDirection:"row",marginTop:hp("0.5%")}}>
                                                <Image source={require("../assets/images/star.png")} style={styles.startRating}/>
                                                <Image source={require("../assets/images/star.png")} style={styles.startRating}/>
                                                <Image source={require("../assets/images/star.png")} style={styles.startRating}/>
                                                <Image source={require("../assets/images/star.png")} style={styles.startRating}/>
                                                <Image source={require("../assets/images/star.png")} style={styles.startRating}/>
                                            </View>
                                        }
                                        <TouchableOpacity 
                                            style={styles.callDoctor}
                                            onPress={openMessage}
                                        >
                                            <Text>Call Now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            
                        </View>
                        </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    
    greetingContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    helloText:{
        color:"#4a4e69",
        fontSize:hp("2%"),
        marginLeft:wp("4%"),
        marginTop:hp("3%")
    },
    nameText:{
        color:"#22223b",
        fontSize:hp("3%"),
        marginLeft:hp("1.7%")
    },
    searchBarContainer:{
        marginHorizontal:wp("8%"),
        marginVertical:hp("1%"),
        backgroundColor:"#f0efeb",
        elevation:10,
        borderRadius:10
    },
    searchInputStyle:{
        padding:hp("1%"),
        color:"#4a4e69"
    },
    updateBoxContainer:{
        backgroundColor:"#414833",
        padding:hp("2%"),
        marginHorizontal:wp("8%"),
        marginVertical:hp("1%"),
        borderRadius:10
    },
    updateBoxImage:{
        height:80,
        width:80,
        borderRadius:80,
        margin:hp("0.6%")
    },
    updateBoxMessageText:{
        margin:hp("0.8%"),
        color:"white"
    },
    dividerText:{
        borderColor:"white",
        borderWidth:0.8,
        marginHorizontal:hp("0.8%"),
        marginVertical:hp("0.2%")
    },
    messageText:{
        marginLeft:hp("0.5%"),
        marginTop:hp("0.9%"),
        color:"white"
    },
    messageBoxImage:{
        height:36,
        width:36,
        borderRadius:18,
        marginHorizontal:wp("1%")
    },
    doctorListContainer:{
        marginHorizontal:wp("8%"),
        marginVertical:hp("1%")
    },
    viewAllText:{
        marginRight:wp("4%"),
        fontSize:hp("1.5%"),
        fontWeight:"700",
        marginTop:hp("1%"),
        color:"#073b4c",
        textDecorationLine:"underline"
    },
    doctorNameList:{
        backgroundColor:"white",
        elevation:20,
        borderRadius:10,
        padding:hp("1.5%"),
        shadowOffset:{
            height:hp("0.7%"),
            width:wp("1.5%")
        },
        shadowColor:"#d8e2dc",
        shadowOpacity:1,
        shadowRadius:2
    },
    DoctorListImage:{
        height:80,
        width:80,
        borderRadius:40,
        marginVertical:hp("1.5%"),
        marginHorizontal:wp("1.5%"),
    },
    DoctorNameStyle:{
        fontWeight:"bold",
        fontSize:hp("1.4%"),
        marginTop:hp("1.5%"),
        color:"#1d3557"
    },
    startRating:{
        height : 10,
        width : 10
    },
    callDoctor:{
        marginTop:hp("1%"),
        marginHorizontal:wp("1%"),
        borderRadius:hp("0.8%"),
        padding:hp("0.5%"),
        borderColor:"#1d3557",
        borderWidth:2,
        width:wp("18%"),
        height:hp("3.3%"),
        shadowOffset:{
            height:5,
            width:0
        },
        backgroundColor:"white",
        shadowColor:"#1d3557",
        shadowOpacity:0.5,
        shadowRadius:0.5
    },
    callNowText:{
        fontSize:hp("1.8%"),
        alignSelf:"center",
        textAlign:"center",
        padding:hp("0.5%"),
        color:"#264653",
        fontWeight:"600"
    }
})

export default HomeScreen