import { View, Text } from 'react-native'
import React from 'react'

import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawer from '@/components/shared/CustomDrawer';

const DrawerLayout = () => {
  return (
    <Drawer
        // Si existe el drawerContent no se renderizan las opciones
        drawerContent={CustomDrawer}
        screenOptions={{
            headerShown: false,
            overlayColor: 'rgba(0,0,0,0.7)',
            drawerActiveTintColor: 'indigo',
            headerShadowVisible: false,
            sceneStyle:{
                backgroundColor: 'white'
            }
        }}
    >
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Tabs Stack',
            title: 'Tabs Stack',
            drawerIcon:()=>(
                <Ionicons name="albums-outline" size={24} color="indigo" />
            )
          }}
        />
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