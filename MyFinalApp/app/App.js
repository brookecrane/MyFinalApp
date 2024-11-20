import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';

export default function App() {
    const navigation = useNavigation();

    return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,

                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("Restaurants")}
                    style={{
                        backgroundColor: '#800000',
                        paddingVertical: 12,
                        paddingHorizontal: 30,
                        borderRadius: 8,
                        marginVertical: 10,
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>
                        Restaurants
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Map")}
                    style={{
                        backgroundColor: '#800000',
                        paddingVertical: 12,
                        paddingHorizontal: 75,
                        borderRadius: 8,
                        marginVertical: 10,
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>
                        Map
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Favorites")}
                    style={{
                        backgroundColor: '#800000',
                        paddingVertical: 12,
                        paddingHorizontal: 45,
                        borderRadius: 8,
                        marginVertical: 10,
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>
                        Favorites
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Settings")}
                    style={{
                        backgroundColor: '#800000',
                        paddingVertical: 12,
                        paddingHorizontal: 55,
                        borderRadius: 8,
                        marginVertical: 10,
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>
                        Settings
                    </Text>
                </TouchableOpacity>
            </View>
    );
}