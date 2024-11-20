import React, { createContext, useState, useContext } from 'react';

const RestaurantContext = createContext();

export const useRestaurant = () => useContext(RestaurantContext);

const RestaurantProvider = ({ children }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const addToFavorites = (restaurant) => {
    if (!favorites.some(item => item.id === restaurant.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, restaurant]);
    }
  };

  const removeFromFavorites = (restaurant) => {
    setFavorites((prevFavorites) => prevFavorites.filter(item => item !== restaurant));
  };
  return (
    <RestaurantContext.Provider value={{ selectedRestaurant, setSelectedRestaurant, favorites, addToFavorites, removeFromFavorites   }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
