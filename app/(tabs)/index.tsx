// app/tabs/App.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { checkLocation, Location } from './LocationChecker';

// Define the target location
const targetLocation: Location = {
  latitude: 43.6493,  // 18 York Street
  longitude: -79.38277,
  radius: 800, // 800 meters
};

const App: React.FC = () => {
  const [isInTargetLocation, setIsInTargetLocation] = useState<boolean | null>(null);

  const handleCheckLocation = () => {
    checkLocation(targetLocation, setIsInTargetLocation);
  };

  return (
    <View style={styles.container}>
      <Button title="Check Location" onPress={handleCheckLocation} />
      {isInTargetLocation !== null && (
        <Text style={styles.text}>
          {isInTargetLocation ? 'You are within the target location!' : 'You are not in the target location.'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginTop: 20,
  },
});

export default App;
