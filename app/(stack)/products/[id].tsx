import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { Products } from '@/store/products.store'




const DetailProductScreen = () => {

    const params = useLocalSearchParams()
    const navigation = useNavigation();


    const product = Products.find((product) => product.id === params.id)

    if (!product) {
        return <Redirect href={'/'} />
    }

    useEffect(() => {

        navigation.setOptions({      
      
           title: product.title,    
      
        });  
      
      }, [navigation, product]);

  return (
    <View className='px-5 mt-10'>
      <Text className='font-work-black'>{product.title}</Text>
      <Text className='font-work-medium'>{product.description}</Text>
      <Text className='font-work-medium'>{product.price}</Text>
    </View>
  )
}

export default DetailProductScreen