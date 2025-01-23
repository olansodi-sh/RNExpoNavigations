import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <SafeAreaView>
        <View className='mt-6 mx-2.5'>
          <Text className='text-3xl font-work-black'>font-work-black</Text>
          <Text className='text-3xl font-work-medium'>font-work-medium</Text>
          <Text className='text-3xl font-work-light'>font-work-light</Text>
        </View>
    </SafeAreaView>
  )
}

export default index