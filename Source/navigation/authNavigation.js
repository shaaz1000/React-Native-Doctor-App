import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import InitialScreen from "../screens/InitialScreen"
import HomeScreen from "../screens/HomeScreen"
import DoctorListScreen from "../screens/DoctorListScreen"
import DoctorDetailScreen from "../screens/DoctorDetailScreen"

const Stack = createStackNavigator()

const AuthNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Initial" component={InitialScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Doctor List" component={DoctorListScreen}/>
                <Stack.Screen name="Doctor Detail" component={DoctorDetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigation