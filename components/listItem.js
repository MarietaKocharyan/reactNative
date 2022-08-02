import { useState } from 'react';
import { Button, StyleSheet, Text, Image, TouchableHighlight, Alert,FlatList,  View, Platform, SafeAreaView, TouchableOpacity } from 'react-native';

export default function ListItem({el, deleteHanelPress}) {
  return (  
        <TouchableOpacity onPress={() => deleteHanelPress(el.key)}>
          <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: "#fafafafa",
    borderWidth: 1,
    marginTop: 20,
    width: "60%",
    marginLeft:'20%',
  }
});
