import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = ( props : DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
        
        <View className='flex items-center justify-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary'>
            <View className='flex items-center justify-center bg-white rounded-full h-24 w-24'>
                <Text className='text-2xl font-work-black text-primary'>DW</Text>
            </View>
        </View>

        {/* DrawerItems */}

        <DrawerItemList {...props} />

    </DrawerContentScrollView>
  )
}

export default CustomDrawer