import { StyleSheet, SafeAreaView, Image, Text, View, Dimensions, ScrollView } from 'react-native';
import ThemeAsset from "../assets/ThemeAsset.png"
import ConventionLogo from '../assets/philsan-38th.png'

export default function Failed() {
    return (
        <View style={styles.container}>
            <Text style={{textAlign: 'center', color: 'red'}}>Scan Failed,</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
