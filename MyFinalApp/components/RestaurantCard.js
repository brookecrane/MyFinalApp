import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function RestaurantCard({ name, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{
      backgroundColor: 'white',
      marginBottom: 15,
      padding: 10,
      borderRadius: 10,
      shadowColor: 'lightgrey',
      shadowOpacity: 0.1,
      shadowRadius: 5
    }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Image
          source={image}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            marginRight: 15,
          }}
        />

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 5,
            }}
          >
            {name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}