import CustomButton from '@/components/shared/CustomButton'
import { Link, router } from 'expo-router'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <React.Fragment>
      <SafeAreaView>
        <View className='px-10 mt-5'>
          {/* <Link className='mb-5' href={'./products'}>Productos</Link>
          <Link className='mb-5' href={'./profile'}>Profile</Link>
          <Link className='mb-5' href={'./settings'}>settings</Link> */}
          <Link className='mb-5' href={'./products'} asChild>
            <CustomButton className='mb-10'  BgColor={'primary'}>Productos</CustomButton>
          </Link>
          
          <CustomButton className='mb-10' BgColor={'primary'} onPress={()=> router.push("./products")}>Ir a Productos</CustomButton>
          <CustomButton className='mb-10' BgColor={'primary'} onPress={()=> router.push("./products")} variant='text-only'>Ir a Productos variante</CustomButton>
        </View>
      </SafeAreaView>
    </React.Fragment>
  )
}

export default HomeScreen