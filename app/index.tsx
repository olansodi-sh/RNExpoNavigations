import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

const index = () => {

    return <Redirect href={'./home'} />
//   return (
//     <SafeAreaView>
//         <View className='mt-6 mx-2.5'>
//           <Text className='text-3xl font-work-black text-primary'>font-work-black</Text>
//           <Text className='text-3xl font-work-medium text-secondary-200'>font-work-medium</Text>
//           <Text className='text-3xl font-work-light text-tertiary'>font-work-light</Text>

//           <Link href={'./products'}>Productos</Link>
//         </View>
//     </SafeAreaView>
//   )
}

export default index