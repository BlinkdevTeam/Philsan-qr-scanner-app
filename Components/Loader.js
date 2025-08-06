import { StyleSheet, Text, View, Image, ActivityIndicator, } from 'react-native';

export default function Loader() {
  return (
    <View style={styles.container}>
        <ActivityIndicator
          size="large" //how can I make this larger
          color="#399544"
          style={styles.spinner} // Applying custom styles here
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  spinner: {
    marginBottom: 20, // Example of custom margin
    transform: [{ scale: 2 }], // Example of scaling the spinner
  },
});
