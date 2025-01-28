import { View, Text } from 'react-native'
import React from 'react'

import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

const DrawerLayout = () => {
  return (
    <Drawer
        screenOptions={{
            headerShown: true,
            overlayColor: 'rgba(0,0,0,0.7)',
            drawerActiveTintColor: 'indigo',
            headerShadowVisible: false,
            sceneStyle:{
                backgroundColor: 'white'
            }
        }}
    >
         <Drawer.Screen
          name="user/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Usuario',
            title: 'Usuario',
            drawerIcon:()=>(
                <Ionicons name="person-circle-outline" size={24} color="indigo" />
            )
          }}
        />
        <Drawer.Screen
          name="schedule/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Horario',
            title: 'Horarios',
            drawerIcon:()=>(
                <Ionicons name="calendar-outline" size={24} color="indigo" />
            )
          }}
        />
    </Drawer>
  )
}

export default DrawerLayout