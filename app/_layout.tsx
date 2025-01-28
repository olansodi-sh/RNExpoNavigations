
import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


import { Slot, SplashScreen } from 'expo-router'

import { useFonts } from 'expo-font'
import "./global.css"

// Se mantendrá la pantalla de carga hasta que se carguen las fuentes
SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
	//Cargue de fuentes
	const [ fontsLoaded , error ] = useFonts({
	    'WorkSans-Black' : require('../assets/fonts/WorkSans-Black.ttf'),
	  	'WorkSans-Light' : require('../assets/fonts/WorkSans-Light.ttf'),
		'WorkSans-Medium' : require('../assets/fonts/WorkSans-Medium.ttf'),
	})

	useEffect(() => {
	  if (error) throw error // Si hay un error al cargar las fuentes, lo lanzamos
	  if (fontsLoaded) SplashScreen.hideAsync() // Si las fuentes se cargaron, ocultamos la pantalla de carga
	}, [fontsLoaded, error])
	
	// Si las fuentes no se han cargado, no se renderiza nada

	if(!fontsLoaded && !error) return null;
	
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Slot />
	  	</GestureHandlerRootView>
	//   <Slot />
	)
}

export default RootLayout