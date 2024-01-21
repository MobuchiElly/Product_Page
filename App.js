import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  Dimensions,
  ImageBackground,  
} from 'react-native';
// import { useDimensions, useDeviceOrientation } from react-native-community/hooks;
import HomeScreen from './app/HomeScreen';


export default function App() {
  // console.log(useDimensions());  //run npm i @react-native-community/hooks;
  // console.log(useDeviceOrientation());
  // const {landscape} = useDeviceOrientation();

  return (
    <View style={{paddingTop:'10%'}}>
      <Text>Hello Helllo !!!</Text>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // height: landscape ? '30px' : '100%',
  },
});