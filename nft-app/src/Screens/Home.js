import { StyleSheet, Text, View, SafeAreaView, FlatList  } from 'react-native'
import React, {useState} from 'react';
import {COLORS, NFTData} from '../shared/constants';
import NFTCard from '../shared/components/NFTCard'
import { FocusedStatusBar } from '../shared/components';
import HomeHeader from '../shared/components/HomeHeader';



 
export default function  Home() {
   const [nftData, setNftData] = useState(NFTData);
  return (
   <SafeAreaView style={styles.container }>
      <FocusedStatusBar backgroundColor={COLORS.primary}/>
      <Text>NFT Store Home</Text>
      <View style={{flex:1}}>
        <View style={{zIndex:0}}>
          <FlatList
              data={NFTData}
              renderItem={({item} )=><NFTCard data={item}>{item.name}</NFTCard>}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader/>}
            />
        </View>
        <View style={styles.backgroundContainer}>
          <View style={styles.backgroundColor1}/>
          <View style={styles.backgroundColor2}/>
        </View>
      </View> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    zIndex:-1,
  },
  cardContainer:{
    zIndex:0
  },
  backgroundContainer:{
    position:'absolute',
    top:0,
    bottom:0,
    right:0,
    left:0, 
    zIndex:-1
  },
  backgroundColor1:{
    height:300,
    backgroundColor: COLORS.primary
  },
  backgroundColor2:{
    flex:1,
    backgroundColor: COLORS.white
  }
});