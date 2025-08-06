import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Footer({onClick}) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.pressableStyle} onPress={() => onClick({trigger: 'home'})}>
                <MaterialCommunityIcons name="home" size={24} color="#ffffff"/>
                <Text style={{ fontSize: 12, color: '#ffffff', fontWeight: 'normal', paddingTop: 5}}>Home</Text>
            </Pressable>
            <Pressable style={styles.pressableStyle} onPress={() => onClick({trigger: "in"})}>
                <MaterialCommunityIcons name="qrcode-plus" size={24} color="#ffffff"/>
                <Text style={{ fontSize: 12, color: '#ffffff', fontWeight: 'normal', paddingTop: 5}}>Time In</Text>
            </Pressable>
            <Pressable style={styles.pressableStyle} onPress={() => onClick({trigger: "out"})}>
                <MaterialCommunityIcons name="qrcode-minus" size={24} color="#ffffff"/>
                <Text style={{ fontSize: 12, color: '#ffffff', fontWeight: 'normal', paddingTop: 5}}>Time Out</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#399544',
        flexDirection: 'row',
        paddingBottom: 20,
        paddingTop: 20,
        paddingHorizontal: 40,
        justifyContent: "space-between",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0, // ensures it stretches fully
        zIndex: 1000 // ensures it stays on top
    },
    buttonText: {
        fontSize: 11
    },
    pressableStyle: {
        textAlign: "center",  // Works for Text components
        alignItems: "center",
    }
});