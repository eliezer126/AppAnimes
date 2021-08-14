import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import Boruto from './Boruto';
import Naruto from './Naruto';
import Saitama from './Saitama';

const Tab = createBottomTabNavigator();

export default function Rotas(){
  
  return(
    <Tab.Navigator  initialRouteNome="Naruto" tabBarOptions={{activeTintColor:'#00008B',}}>
      <Tab.Screen name="Naruto"
       component={Naruto}
       options={{tabBarLabel:'Naruto',
       tabBarIcon:({color, size}) => (
       <MaterialCommunityIcons name="arrow-left-circle" color={color}
       size={size}/>
       ),
       }}
       />
        <Tab.Screen name="Boruto"
       component={Boruto}
       options={{tabBarLabel:'Boruto',
       tabBarIcon:({color, size}) => (
       <MaterialCommunityIcons name="arrow-up-box" color={color}
       size={size}/>
       ),
       }}
       />
        <Tab.Screen name="Saitama"
       component={Saitama}
       options={{tabBarLabel:'Saitama',
       tabBarIcon:({color, size}) => (
       <MaterialCommunityIcons name="arrow-right-box" color={color}
       size={size}/>
       ),
       }}
       />
    </Tab.Navigator>
  );
}