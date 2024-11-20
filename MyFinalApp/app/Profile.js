import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

export default function Profile (){
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');

  const handleSaveProfile = () => {
    alert('Profile saved!');
  };

  return (
    <View style={{
      flex: 1,
      padding: 20,
      backgroundColor: 'white',
    }}>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      }}>Profile</Text>

      <Image
        source={require("../assets/images/image1.jpeg")}
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          marginBottom: 20,
          alignSelf: 'center'
        }}
      />
      <View style={{ 
        marginBottom: 15 
        }}>
        <Text>Name:</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            borderColor: 'lightgrey',
            color: 'lightgray',
          }}
        />
      </View>

      <View style={{ 
        marginBottom: 15 
        }}>
        <Text>Email:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
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
        onPress={handleSaveProfile}
        style={{
          padding: 15,
          backgroundColor: '#800000',
          borderRadius: 5,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  )
};

