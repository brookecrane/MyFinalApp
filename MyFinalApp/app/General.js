import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function General() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <Text style={{ 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20 
        }}>
        General Settings</Text>
      <Text style={{ 
        fontSize: 18, 
        marginBottom: 20 
        }}>
        Customize your app.</Text>

      <TouchableOpacity
        style={{ 
            padding: 15, 
            backgroundColor: 'lightgrey', 
            borderRadius: 8, 
            marginBottom: 15, 
            alignItems: 'center' 
        }}>
        <Text style={{ fontSize: 18 }}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ 
            padding: 15, 
            backgroundColor: 'lightgrey', 
            borderRadius: 8, 
            marginBottom: 15, 
            alignItems: 'center' 
        }}>
        <Text style={{ fontSize: 18 }}>Language & Region</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ 
            padding: 15, 
            backgroundColor: 'lightgrey', 
            borderRadius: 8, 
            marginBottom: 15, 
            alignItems: 'center' 
        }}>
        <Text style={{ fontSize: 18 }}>Date & Time</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ 
            padding: 15, 
            backgroundColor: 'lightgrey', 
            borderRadius: 8, 
            marginBottom: 15, 
            alignItems: 'center' 
            }} >
        <Text style={{ fontSize: 18 }}>Notifications</Text>
      </TouchableOpacity>
    </View>
)};
