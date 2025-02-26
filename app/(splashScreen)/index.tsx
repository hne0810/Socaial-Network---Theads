import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { imgApp } from '@/assets/images'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image 
          source={imgApp.iconLogo} 
          style={[styles.img]} />
        <Text style={[{marginVertical:20, fontSize:25, fontWeight: '600', color: 'rgba(255,0,0,0.5)', fontStyle:'italic',}]} >
          Tube
        </Text>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  headerContainer:{
    display: 'flex',
    flexDirection: 'row',
  },

  img: {
    width: 60,
    height: 60,
  },
})