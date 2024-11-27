import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRestaurant } from '../app/RestaurantContext';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantDetail() {
  const { selectedRestaurant, favorites, addToFavorites, removeFromFavorites } = useRestaurant(); 
  const navigation = useNavigation(); 

  const { name, rating, address, image } = selectedRestaurant; 

  const isFavorite = favorites.find(restaurant => restaurant.id === selectedRestaurant.id); 
  
  const handleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(selectedRestaurant);
      alert('Removed from Favorites');
    } else {
      addToFavorites(selectedRestaurant);
      alert('Added to Favorites');
    }
  };
  
  return (
    <View style={{ 
      flex: 1, 
      padding: 40, 
      backgroundColor: 'white' 
      }}>
      <TouchableOpacity
        onPress={handleFavorite}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          padding: 10,
          backgroundColor: 'orange',
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10, 
        }}
      >
        <Text style={{ fontSize: 25 }}>{isFavorite ? '♥️' : '🩶'}</Text>
      </TouchableOpacity>

      <Image
        source={image}
        style={{
          width: '100%',
          height: 300,
          borderRadius: 10,
          marginBottom: 15,
        }}
      />

      <Text style={{ 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 15 }}>
        {name}
      </Text>

      <Text style={{ fontSize: 18, color: 'grey', marginBottom: 15 }}>
        Rating: {rating}
      </Text>

      <Text style={{ fontSize: 18 }}>
         {address}
      </Text>
    </View>
  );
}