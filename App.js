import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // ✅ import this
import LandingPage from './Components/LandingPage';
import Success from './Components/Success';
import Failed from './Components/Failed';
import Scanner from './Components/Scanner';
import Loader from './Components/Loader';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Canceled from './Components/Canceled'

export default function App() {
  const [screen, setScreen] = useState("home");
  const [isLoading, setIsLoading] = useState(false);
  const [scannedUser, setScannedUser] = useState(null);
  const [messageFrom, setMessageFrom] = useState("in");

  const handleScreen = (e) => {
        
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setScreen(e.trigger);
            setScannedUser(e.scannedUser);
            setMessageFrom(e.messageFrom)
        }, 1000);
    };

  const renderContent = (component) => {
    return (
      <>
        <Header/>
        {component}
      </>
    )
  }

  const renderScreen = () => {
    if (isLoading) return <Loader />;
    switch (screen) {
      case "in":
        return renderContent(<Scanner screen={screen} onClick={handleScreen}/>);
      case "out":
        return renderContent(<Scanner screen={screen} onClick={handleScreen}/>);
      case "success" :
        return renderContent(<Success scannedUser={scannedUser} messageFrom={messageFrom} onClick={handleScreen}/>);
      case "failed":
        return renderContent(<Failed/>);
      case "canceled":
        return renderContent(<Canceled scannedUser={scannedUser} messageFrom={messageFrom} onClick={handleScreen}/>);
      case "home":
        return <LandingPage/>;
      default:
        return <LandingPage/>
    }
  }

  return (
      <LinearGradient colors={['#ffffff', '#CBF9B6']} style={styles.container}>
        <StatusBar style="auto" />
        <SafeAreaView>
          {renderScreen()}
        </SafeAreaView>
        <Footer onClick={handleScreen} />
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});
