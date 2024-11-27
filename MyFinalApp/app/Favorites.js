import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRestaurant } from '../app/RestaurantContext';
import { useNavigation } from '@react-navigation/native';

export default function Favorites() {
  const { favorites } = useRestaurant(); 
  const navigation = useNavigation();

  return (
    <View style={{ 
      flex: 1, 
      padding: 20, 
      backgroundColor: 'white' 
    }}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item.id })}
            style={{
              backgroundColor: 'lightgray',
              padding: 10,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text style={{ 
              fontSize: 18, 
              fontWeight: 'bold' 
            }}>
              {item.name}
            </Text>
            <Text>{item.address}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}