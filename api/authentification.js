import React from 'react';
import { Text, View, Image, TouchableOpacity, Alert} from "react-native";

const users = [
    { mail: "test@test.fr", password: "test", nickName: "test" },
    { mail: "admin@test.fr", password: "admin", nickName: "admin" },
   ];

   const authenticateUser = (mail, password) => {
    return (
      // Search for the first user matching login and password
      users.find((u) => u.mail === mail && u.password === password) || null
    );
   };

export default authenticateUser;
   