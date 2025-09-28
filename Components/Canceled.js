import { StyleSheet, SafeAreaView, Image, Text, View, Dimensions, ScrollView, Pressable } from 'react-native';
import ThemeAsset from "../assets/ThemeAsset.png"
import ConventionLogo from '../assets/philsan-38th.png'

export default function Canceled({scannedUser, messageFrom, onClick}) {
    return (
        <View style={styles.container}>
            <View style={{paddingBottom: 100}}>
              <Text style={{textAlign: 'center', fontSize: '32', fontWeight: 'bold', color: '#1F773A'}}>{scannedUser}</Text>
              <Text style={{textAlign: 'center', fontSize: '28', fontWeight: '400', color: 'red'}}>{"Your Regsitration was"}</Text>
              <Text style={{textAlign: 'center', fontSize: '28', fontWeight: '800', color: 'red'}}>{"CANCELED"}</Text>
              <Text style={{textAlign: 'center', fontSize: '28', fontWeight: '400', color: 'red', paddingTop: 20}}>{"Visit your email to verify"}</Text>
            </View>
            <Pressable  onPress={() => onClick({trigger: messageFrom === "in" ? "in" : "out"})} style={{backgroundColor: "#1F773A", paddingTop: 10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20}}>
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