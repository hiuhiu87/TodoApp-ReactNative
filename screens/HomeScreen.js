import React from "react";
import {Icon} from "@rneui/themed";
import DetailsScreen from "./DetailsScreen";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SettingScreen from "./SettingScreen";

const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({navigation}) => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Notes') {
                        iconName = focused
                            ? 'albums'
                            : 'albums';
                    } else if (route.name === 'Folder') {
                        iconName = focused ? 'folder' : 'folder';
                    }
                    return <Icon type={'ionicon'} name={iconName} size={size} color={color}/>;
                },
                headerShown: false,
                tabBarActiveTintColor: '#517fa4',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarStyle: {
                    borderColor: 'black',
                },
                tabBarPressColor: 'black',
                tabBarIndicatorStyle: {
                    backgroundColor: '#517fa4',
                },
                tabBarPressOpacity: 0.5,
                tabBarGap: 0,
            })}
        >
            <Tab.Screen name="Notes" component={DetailsScreen}/>
            <Tab.Screen name="Folder" component={SettingScreen}/>
        </Tab.Navigator>
    );
}

export default HomeScreen;