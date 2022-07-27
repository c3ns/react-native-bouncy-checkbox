import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BouncyCheckbox from './lib/BouncyCheckbox';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <BouncyCheckbox
        size={50}
        onPress={isChecked => {
          console.log('OUTSIDE: ', isChecked);
        }}
      />
      <BouncyCheckbox
        onPress={() => {}}
        unfillColor={'#030'} //? Inner color of the checkbox
        fillColor="#faf" //? Outer color (radius) of the checkbox
        isChecked={true} //? Checks initial state, doesn't update state yet
        size={35} //? Size of the checkbox
        iconStyle={{
          borderWidth: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
