import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack
        screenOptions={{
            headerShown: true,
            headerShadowVisible: false,
            contentStyle: { backgroundColor: 'white' },
        }}
    >
        <Stack.Screen name='home/index' options={{ title:'Home Screen'}}/>
        <Stack.Screen name='products/index' options={{ title:'Products Screen', animation:'ios_from_right'}}/>
        <Stack.Screen name='profile/index' options={{ title:'Profile Screen'}}/>
        <Stack.Screen name='settings/index' options={{ title:'Settings Screen'}}/>
    </Stack>
  )
}

export default StackLayout