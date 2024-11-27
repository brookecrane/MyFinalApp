import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={{ 
      flex: 1, 
      padding: 30, 
      backgroundColor: '#fff' 
      }}>
      <Text style={{ 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20 
        }}>
        Settings</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('General')}
        style={{ 
          padding: 15, 
          backgroundColor: 'lightgrey', 
          borderRadius: 8, 
          marginBottom: 15, 
          alignItems: 'center' 
        }}>
        <Text style={{ fontSize: 18 }}>General</Text>
      </TouchableOpacity>
    
       
      <TouchableOpacity
        onPress={() => navigation.navigate('Privacy')}
        style={{ 
          padding: 15, 
          backgroundColor: 'lightgrey', 
          borderRadius: 8, 
          marginBottom: 15, 
          alignItems: 'center' 
        }}>
        <Text style={{ fontSize: 18 }}>Privacy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={{ 
          padding: 15, 
          backgroundColor: 'lightgrey', 
          borderRadius: 8, 
          marginBottom: 15, 
          alignItems: 'center' 
        }}>
        <Text style={{ fontSize: 18 }}>Profile</Text>
      </TouchableOpacity>
   
     <TouchableOpacity
        onPress={() => navigation.navigate('Password')}
        style={{ 
          padding: 15, 
          backgroundColor: 'lightgrey', 
          borderRadius: 8, 
          marginBottom: 15, 
          alignItems: 'center' }}
      >
        <Text style={{ fontSize: 18 }}>Password</Text>
      </TouchableOpacity>
   
      <TouchableOpacity
        onPress={() => alert('Logging out!')}
        style={{ 
          padding: 15, 
          backgroundColor: '#800000', 
          borderRadius: 8, 
          marginBottom: 15, 
          alignItems: 'center' }}
      >
        <Text style={{ 
          fontSize: 18, 
          color: 'white' 
          }}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;