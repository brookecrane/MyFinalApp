import React from 'react';
import { View, Text, Image } from 'react-native';

export default function RestaurantCard({ name, image, address, rating }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 3,
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
        <Text
          style={{
            fontSize: 14,
            color: '#666',
            marginBottom: 5,
          }}
        >
          {address}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: 'orange',
          }}
        >
          Rating: {rating}
        </Text>
      </View>
    </View>
  );
}