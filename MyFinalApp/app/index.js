import { Text, View, TouchableOpacity} from "react-native";
import { useNavigation } from "expo-router";

export default function Index() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#800000',
        textAlign: 'center'
      }}>
        Indiana University Bloomington
      </Text>
      <Text style={{
        marginVertical: 10,
        textAlign: 'center',
      }}>
        Tap button below to check it out!
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("App")}
        style={{
          backgroundColor: '#800000', 
          paddingVertical: 12,
          paddingHorizontal: 30, 
          borderRadius: 8,
          marginTop: 20, 
        }}
      >
        <Text style={{
          color: 'white', 
          fontSize: 18,
          fontWeight: 'bold',
        }}>
          Explore Campus
        </Text>
      </TouchableOpacity>
    </View>
  );
}
