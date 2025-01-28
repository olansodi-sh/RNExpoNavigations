import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { Link, router, useNavigation } from 'expo-router'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const HomeScreen = () => {
  
  const navigation = useNavigation()


  return (
    <React.Fragment>
      <SafeAreaView>
        <View className='px-10 mt-5'>
          {/* <Link className='mb-5' href={'./products'}>Productos</Link>
          <Link className='mb-5' href={'./profile'}>Profile</Link>
          <Link className='mb-5' href={'./settings'}>settings</Link> */}
          <Link className='mb-5' href={'/products'} asChild>
            <CustomButton className='mb-10'  BgColor={'primary'}>Productos</CustomButton>
          </Link>
          
          <CustomButton className='mb-10' BgColor={'secondary'} onPress={()=> router.push("/profile")}>Profile</CustomButton>
          <CustomButton className='mb-10' BgColor={'tertiary'} onPress={()=> router.push("/settings")}>Settings</CustomButton>

          
          <Link href={'/products'} asChild>
            <CustomButton variant={'text-only'} className='mb-10'  BgColor={'primary'}>Variante Productos</CustomButton>
          </Link>
          <CustomButton className='mb-10' BgColor={'primary'} onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}>Abrir menú</CustomButton>
        </View>
      </SafeAreaView>
    </React.Fragment>
  )
}

export default HomeScreen