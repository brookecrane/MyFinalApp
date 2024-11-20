import { View, Image } from 'react-native';

export default function Map() {
  return (
    <View>
      <Image
        source={require('../assets/images/image.jpg')} 
        style={{
          width: 410, 
          height: 800, 
          margin: 10, 
          borderRadius: 10, 

        }}
      />
    </View>
  );
}