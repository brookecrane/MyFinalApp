import { Stack } from "expo-router";

export default function RootLayout() {
  return (
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
          name="Settings"
          options={{ title: "Settings" }}
        />
      </Stack>
  );
}