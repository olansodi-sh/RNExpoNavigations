import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <SafeAreaView>
        <View className='mt-6 mx-2.5'>
          <Text className='text-3xl font-work-black text-primary'>font-work-black</Text>
          <Text className='text-3xl font-work-medium text-secondary-200'>font-work-medium</Text>
          <Text className='text-3xl font-work-light text-tertiary'>font-work-light</Text>
        </View>
    </SafeAreaView>
  )
}

export default index