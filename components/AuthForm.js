import React from 'react';
import { Text, View, Image, TouchableOpacity, Alert} from "react-native";
import Test2 from './Input';
import authenticateUser from '../api/authentification';

const Test1 = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "grey"
      }}
    >
        <Image source={require("../assets/Koala.png")}/>
        <Test2 nom={"Email"} iconSource={require("../assets/Mail.png")}/>
        <Test2 nom={"Mot de passe"} iconSource={require("../assets/Cle.png")}/>

        <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height:40,
        width:250,
        margin:10,
        backgroundColor:"yellow"
      }}
    >
        <TouchableOpacity onPress={() => Alert.alert("Connexion")}>
        <Text>Se connecter</Text>
        </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => Alert.alert("MDP Oublié")}>
      <Text style={{ fontSize: 15 }}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
    
      <TouchableOpacity onPress={() => Alert.alert("Inscription")}>
      <Text style={{ fontSize: 15 }}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Test1;