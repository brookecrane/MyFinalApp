import React, { createContext, useState, useContext } from 'react';

const RestaurantContext = createContext();

export const useRestaurant = () => useContext(RestaurantContext);

const RestaurantProvider = ({ children }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState([]);
  
  return (
    <RestaurantContext.Provider value={{ selectedRestaurant, setSelectedRestaurant  }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;