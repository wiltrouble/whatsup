import { NavigationContainer, DefaultTheme, DarkTheme, BaseRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from '../constants/Colors';
import ChatRoomScreen from "../screens/ChatRoomScreen";
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle: {
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen 
        name="Root" 
        component={BottomTabNavigator}
        options={{
          title: 'Whatsup',
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
               width: 60, 
               justifyContent: 'space-between',
               marginRight: 10}}>
              <Octicons name='search' size={22} color={Colors.light.background}/>
              <MaterialCommunityIcons name='dots-vertical' size={22} color={Colors.light.background}/>
            </View>
          )
        }} />
      <Stack.Screen 
        name="ChatRoomScreen" 
        component={ChatRoomScreen} 
        options={({route}) => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 60,
              justifyContent: "space-between",
              marginRight: 10
            }}>
              <Feather name="video" size={24} color={Colors.light.background} />
              <Ionicons name="call-outline" size={24} color={Colors.light.background} />
            </View>
          )
        })}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
