import {StyleSheet} from 'react-native';
import React from 'react';
import DetailsScreen from "./screens/DetailsScreen";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DetailTodo from "./screens/DetailTodo";

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({route}) => ({
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#517fa4',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }
                )}
            >
                <Stack.Screen
                    name="Note"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Detail Note"
                    component={DetailTodo}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
