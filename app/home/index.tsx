import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <React.Fragment>
      <SafeAreaView>
        <View className='px-10'>
          <Link className='mb-5' href={'./products'}>Productos</Link>
          <Link className='mb-5' href={'./profile'}>Profile</Link>
          <Link className='mb-5' href={'./settings'}>settings</Link>
        </View>
      </SafeAreaView>
    </React.Fragment>
  )
}

export default HomeScreen