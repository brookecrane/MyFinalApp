import React from 'react';
import { View, FlatList } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';

const restaurants = [
  { id: 1, name: "Mother Bear's Pizza", rating: "4.2 ⭐", address: "1428 E 3rd St, Bloomington, IN 47401", image: require("../assets/images/mother.png") },
  { id: 2, name: "FARMbloomington", rating: "4.8 ⭐", address: "108 E Kirkwood Ave, Bloomington, IN 47408", image: require("../assets/images/farm.png") },
  { id: 3, name: "Big Woods", rating: "4.1 ⭐", address: "116 N Grant St, Bloomington, IN 47408", image: require("../assets/images/big.jpeg") },
  { id: 4, name: "Taste of India", rating: "3.9 ⭐", address: "316 E 4th St, Bloomington, IN 47408", image: require("../assets/images/taste.jpeg") },
  { id: 5, name: "Malibu Grill", rating: "3.7 ⭐", address: "106 N Walnut St, Bloomington, IN 47404", image: require("../assets/images/malibu.jpg") },
  { id: 6, name: "Social Cantina", rating: "3.1 ⭐", address: "125 N College Ave, Bloomington, IN 47404", image: require("../assets/images/social.jpeg") },
  { id: 7, name: "Uptown Cafe", rating: "4.1 ⭐", address: "102 E Kirkwood Ave, Bloomington, IN 47408", image: require("../assets/images/uptown.jpeg") },
  { id: 8, name: "Nick's English Hut", rating: "5.0 ⭐", address: "423 E Kirkwood Ave, Bloomington, IN 47408", image: require("../assets/images/nicks.png") },
  { id: 9, name: "Da Vinci Pizza & Pasta", rating: "3.1 ⭐", address: "250 S Washington St, Bloomington, IN 47408", image: require("../assets/images/da.jpg") },
  { id: 10, name: "BuffaLouie's", rating: "4.0 ⭐", address: "114 S Indiana Ave, Bloomington, IN 47408", image: require("../assets/images/buff.png") },
];

export default function Restaurants() {

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: '#f8f8f8' }}>
     <FlatList
        style={{ flex: 1 }}
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantCard
            name={item.name}
            rating={item.rating}
            address={item.address}
            image={item.image}
          />
        )}
      />
    </View>
  );
}