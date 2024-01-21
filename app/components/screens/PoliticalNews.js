import { View, Text } from 'react-native'
import React from 'react'
import VerticleList from '../lists/VerticleList'

const PoliticalNews = ({data}) => {
  return (
    <View>
     <VerticleList title={"political news"} data={data}/>
    </View>
  )
}

export default PoliticalNews