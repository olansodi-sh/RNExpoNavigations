import { View, Text } from 'react-native'
import React from 'react'
import { router, Stack, useNavigation } from 'expo-router'
import { DrawerActions, StackActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const StackLayout = () => {

  const navigation = useNavigation()

  const onHeaderLeftPress = (canGoBack:boolean) => {
    console.log('canGoBack', canGoBack)
      if (canGoBack){
        router.back()
        return
      } 
      navigation.dispatch(DrawerActions.openDrawer())

  }
  return (
    <Stack
    screenOptions={{
      // headerShown: false,
      headerShadowVisible: false,
      contentStyle: {
        backgroundColor: 'white',
      },
      headerLeft: ({ tintColor, canGoBack }) => (
        <Ionicons
          name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
          className="mr-5"
          size={24}
          style={{ color: tintColor, borderWidth:1 }}
          onPress={()=>onHeaderLeftPress(!!canGoBack)}
        />
      ),
    }}
    >
        <Stack.Screen name='home/index' options={{ title:'Home Screen'}}/>
        <Stack.Screen name='products/index' options={{ title:'Products Screen', animation:'ios_from_right'}}/>
        <Stack.Screen name='products/[id]' options={{ title:'Profile Screen'}}/>
        <Stack.Screen name='settings/index' options={{ title:'Settings Screen'}}/>
        <Stack.Screen name='profile/index' options={{ title:'Settings Screen'}}/>
    </Stack>
  )
}

export default StackLayout