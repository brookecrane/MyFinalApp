import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function Privacy() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
      <ScrollView style={{ marginBottom: 30 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Privacy Policy
        </Text>

        <Text
          style={{
              fontSize: 20,
              fontWeight: '300',
              marginTop: 15,
              textAlign: 'center'
          }}
        >
          Welcome to myapp. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </Text>

        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            marginTop: 15,
          }}
        >
          1. Information We Collect
        </Text>

        <Text
          style={{
            fontSize: 16,
            marginTop: 10,
            lineHeight: 22,
          }}
        >
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxvvxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </Text>

        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            marginTop: 15,
          }}
        >
          2. How We Use Your Information
        </Text>

        <Text
          style={{
            fontSize: 16,
            marginTop: 10,
            lineHeight: 22,
          }}
        >
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxvvxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </Text>

      </ScrollView>
    </View>
  )
};
