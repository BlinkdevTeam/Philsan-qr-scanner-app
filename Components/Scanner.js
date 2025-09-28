import { useEffect, useState } from 'react';
import { CameraView, Camera } from 'expo-camera';
import { StyleSheet, Text, View, Alert, Pressable, Dimensions, ActivityIndicator, useWindowDimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl='https://shvutlcgljqiidqxqrru.supabase.co'
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNodnV0bGNnbGpxaWlkcXhxcnJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5MTM2NDgsImV4cCI6MjA2MTQ4OTY0OH0.UXJKk6iIyaVJsohEB6CwwauC21YPez1xwsOFy9qa34Q'
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Scanner({screen, onClick}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [isFrontcam, setIsFrontcam] = useState(false);
    const [scanned, setScanned] = useState(false);
    // const [qrData, setQrData] = useState('');
    const localeTimeStamped = new Date().toLocaleString();
    

    useEffect(() => {
        setIsFrontcam(false);

        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();

            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        
        const currentTime = new Date().toISOString();

        const { data: user, error } = await supabase
            .from('philsan_registration_2025')
            .select('*')
            .eq('email', data)
            .single();

        console.log("user", user.first_name, user.middle_name, user.last_name)

        if (error || !user) {
            onClick({ trigger: screen === "in" ? "failed" : "failed", error: "invalidQr" });
            setScanned(false);
            return;
        } else {
          if(user.reg_status === "approved") {
            updateTime(user.email, currentTime, screen)            
            onClick({ 
                trigger: "success",
                scannedUser: user.first_name+" "+user.last_name,
                messageFrom: screen === "in" ? "in" : "out"
            });
          } else {
            onClick({ 
                trigger: "canceled",
                scannedUser: user.first_name+" "+user.last_name
            });
          }
        }
    };

    const updateTime = async (email, time, screen) => {
        const updateData = screen === 'in' ? { time_in: time } : { time_out: time };
        const { data: result, error } = await supabase
                .from('philsan_registration_2025')
                .update(updateData)
                .eq('email', email)
                .select()
        if (error) throw error
        return result
    }

    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#00e47c" />
            </View>
        );
    }

    // ❌ Camera permission denied
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={styles.overlayText}>No access to camera</Text>
            </View>
        );
    }

    // ✅ Camera permission granted
    return (
        <View style={styles.container}>
            <CameraView
                style={StyleSheet.absoluteFillObject}
                barCodeScannerSettings={{ barcodeTypes: ['qr'] }}
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                facing={isFrontcam ? "front" : "back"}
            />
            <View 
                style={[
                    styles.overlay,
                    {
                        opacity: .5,
                        bottom: 580 ,
                        right: 435 ,
                    }
                ]}>
                {
                  screen === "in" ?
                  <MaterialCommunityIcons name="qrcode-plus" size={50} color="#ffffff"/> :
                  <MaterialCommunityIcons name="qrcode-minus" size={50} color="#ffffff"/>
                }
            </View>
            <Pressable 
                onPress={() => setIsFrontcam(!isFrontcam)} 
                style={[
                    styles.flipOverlay, 
                    {
                        bottom: 70,
                        right: 430
                    }
                ]}>
                <MaterialCommunityIcons name="camera-flip-outline" size={24} color="#ffffff"/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000000",
  },
  overlay: {
      position: 'absolute',
      alignSelf: 'left',
      borderRadius: 8,
  },
  overlayContent: {
      flexDirection: 'row',
      gap: 10,
  },  
  overlayText: {
      // color: '#00e47c',
      color: '#ffffff',
      fontSize: 18,
  },
  flipOverlay: {
      position: 'absolute',
      backgroundColor: '#08312A',
      padding: 20,
      borderRadius: 100,
  },
  flipOverlayText: {
      color: '#00e47c',
      fontSize: 18,
  },
});
