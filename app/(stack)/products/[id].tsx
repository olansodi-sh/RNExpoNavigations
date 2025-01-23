import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { Products } from '@/store/Products.store'




const DetailProductScreen = () => {

    const params = useLocalSearchParams()

    const product = Products.find((product) => product.id === params.id)

    if (!product) {
        return <Redirect href={'/'} />
    }
    
  return (
    <View className='px-5 mt-10'>
      <Text className='font-work-black'>{product.title}</Text>
      <Text className='font-work-medium'>{product.description}</Text>
      <Text className='font-work-medium'>{product.price}</Text>
    </View>
  )
}

export default DetailProductScreen