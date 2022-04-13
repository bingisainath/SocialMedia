import { View, Text, FlatList ,StyleSheet,Image, Button } from 'react-native'
import React from 'react'
import flatList from '../Data/FlatData'
import {createDrawerNavigator} from '@react-navigation/drawer';
import chats from './chats';

const Drawer = createDrawerNavigator();

const FlatListItem = (props) => {
  return (
    <>
    <View style={{
      flex:1,
      flexDirection:'column',
      padding:10,
    }}>
      <View style={{
        flex:1,
        flexDirection:'row',
        //backgroundColor: props.item.key % 2 == 0 ?'white':'#2798d9',
        backgroundColor:'white',
      }}>
        <Image 
        source={{uri:props.item.imageUrl}}
        style={{width:100,height:100, margin : 5}}/>

        <View style={{
          flex:1,
          flexDirection:'column',
          height:100,
        }}>

          <Text style={styles.FlatListItem}>{props.item.name}</Text>
          <Text style={styles.FlatListItem}>{props.item.email}</Text>
          <Button style={styles.AddReqBtn} title="Add" ></Button>
        </View>
    </View>
    <View style={{
      height:1,
      backgroundColor:'#2798d9',
    }}>
    </View>
    </View>
    {/* <Drawer.Navigator>
        <Drawer.Screen name="chats" component={chats} />
    </Drawer.Navigator> */}
    </>
  )
}

const styles = StyleSheet.create({
  FlatListItem:{
    color:'black',
    padding:3,
    fontSize:18,
  },
  AddReqBtn:{
    //color:'#2798d9'
    color:'black'
  }
})

const Feed = () => {
  return (
    <View>
      <FlatList data={flatList}
      renderItem={({item,key,imageUrl,email})=>{
        return(
          <FlatListItem item={item} key={key} email={email} imageUrl={imageUrl}/> 
        )
      }}>
      </FlatList>
      
    </View>
  )
}

export default Feed