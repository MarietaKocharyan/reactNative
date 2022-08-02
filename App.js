import { useState } from 'react';
import { Button, ScrollView,  StyleSheet, Text, Image, Alert,FlatList,  View, Platform, SafeAreaView } from 'react-native';

import  Header  from './components/header';
import ListItem from './components/listItem';
import Form from './components/form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: "Fisrt", key: 1},
    {text: "Second", key: 2},
  ])

  const onHandelPress = (text) => {
    setListOfItems((list) => {
      return [{text: text, key: Math.random().toString(36).substring(7)}, ...list]
    })
  }

  const deleteHanelPress = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key )
    })
  }
  return (
      <ScrollView style={styles.container}>
        <Header />
        <Form onHandelPress={onHandelPress} /> 
        <View>
          <FlatList data={listOfItems} renderItem={({item}) => (
           <ListItem el={item}  deleteHanelPress={deleteHanelPress}/>
          )} />
        </View>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
 
});
 