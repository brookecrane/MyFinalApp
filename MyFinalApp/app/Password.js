import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function Password() {
  const [Password, setPassword] = useState('xxxxxxx423749');
  return (
    <View style={{
      flex: 1,
      padding: 20,
      backgroundColor: 'white'
    }}>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
      }}>
        Change Password</Text>
  
        <View style={{ 
        marginBottom: 15 
        }}>
        <Text>Password:</Text>
        <TextInput
          value={Password}
          onChangeText={setPassword}
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            borderColor: 'lightgrey',
            color: 'lightgray',
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => alert('Updated Password!')}
        style={{ 
          padding: 15,
           backgroundColor: 'lightgrey', 
           borderRadius: 8, 
           marginBottom: 15, 
           alignItems: 'center' }}
      >
        <Text style={{ 
          fontSize: 18 
          }}>
            Update Password</Text>
      </TouchableOpacity>
    </View>
  )
};