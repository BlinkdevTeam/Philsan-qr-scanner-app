import { StyleSheet, SafeAreaView, Image, Text, View, Dimensions, ScrollView, Pressable } from 'react-native';
import ThemeAsset from "../assets/ThemeAsset.png"
import ConventionLogo from '../assets/philsan-38th.png'

export default function Success({scannedUser, successMessage, onClick}) {
    return (
        <View style={styles.container}>
            <View style={{paddingBottom: 100}}>
              <Text style={{textAlign: 'center', fontSize: '28', fontWeight: '400', color: '#59ae73ff'}}>{successMessage === "in" ? "Welcome" : "Thank You see you again"}</Text>
              <Text style={{textAlign: 'center', fontSize: '32', fontWeight: 'bold', color: '#1F773A'}}>{scannedUser}</Text>
            </View>
            <Pressable  onPress={() => onClick({trigger: successMessage === "in" ? "in" : "out"})} style={{backgroundColor: "#1F773A", paddingTop: 10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20}}>
              <Text style={{textAlign: 'center', fontSize: '16', fontWeight: '400', color: '#ffffff'}}>Scan Again</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
});
