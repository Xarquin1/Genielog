import React from 'react';
import { Text, View, TextInput, Image } from "react-native";

const Test2 = ({iconSource, nom}) => {
  return (
    <View
      style={{
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        height:40,
        width:250,
        margin:10,
        backgroundColor:"white"
      }}
    >
        <Image source={iconSource} style={{width:25,height:25,margin:20}} />
        <TextInput placeholder={nom}/>
    </View>
  );
};

export default Test2;