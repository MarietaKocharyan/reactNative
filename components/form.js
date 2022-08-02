import { useState } from 'react';
import { Button,View, StyleSheet, TextInput,} from 'react-native';

export default function Form({onHandelPress}) {
    const [text, setText] = useState("");
    const onChange = (text) =>  {
        setText(text);
    };

  return (  
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="Input list"/>
            <Button color={"red"} onPress={() => onHandelPress(text)}  title="Add list"/>
        </View>
  ); 
}
 
const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%", 
    width: "60%",
  }
});
