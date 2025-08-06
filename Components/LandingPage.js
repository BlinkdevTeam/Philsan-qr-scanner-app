import { StyleSheet, SafeAreaView, Image, Text, View, Dimensions, ScrollView, ImageBackground } from 'react-native';
import ThemeAsset from "../assets/ThemeAsset.png"
import ConventionLogo from '../assets/philsan-38th.png'

export default function LandingPage() {
    return (
        <View style={styles.container}>
            <Image
                source={ConventionLogo}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={{textAlign: 'center'}}>Innovating for a Sustainable Future: Harnessing Technology and Alternative Solutions in Animal Nutrition and Health</Text>
            <Image
                source={ThemeAsset}
                resizeMode="contain"
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width - 32, // Full width minus padding
    height: undefined,
    aspectRatio: 2, // or tweak this (try 3, 1.5, etc., depending on actual image)
    marginVertical: 16,
  },
});
