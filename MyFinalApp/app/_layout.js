import { Stack } from "expo-router";
import RestaurantProvider from './RestaurantContext';

export default function RootLayout() {
  return (
    <RestaurantProvider>
<Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="App"
          options={{ title: "Campus" }}
        />
        <Stack.Screen
          name="Map"
          options={{ title: "Map" }}
        />
        <Stack.Screen
          name="Restaurants"
          options={{ title: "Restaurants" }}
        />
        <Stack.Screen
          name="RestaurantDetails"
          options={{ title: "Restaurant" }}
        />
        <Stack.Screen
          name="Favorites"
          options={{ title: "Favorites" }}
        />
        <Stack.Screen
          name="Settings"
          options={{ title: "Settings" }}
        />
        <Stack.Screen
          name="General"
          options={{ title: "Settings" }}
        />
          <Stack.Screen
          name="Privacy"
          options={{ title: "Settings" }}
        />
        <Stack.Screen
          name="Profile"
          options={{ title: "Settings" }}
        />
        <Stack.Screen
          name="Password"
          options={{ title: "Settings" }}
        />
      </Stack>
    </RestaurantProvider >
  );
}