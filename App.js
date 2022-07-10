import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import AppStack from './src/navigation/AppStack';

const Stack = createNativeStackNavigator();


// const App = () => {
//   return (
//     <NavigationContainer>
//       {<RootStack />
//       /* <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//         />
//         <Stack.Screen name="Splash" component={SplashScreen} />
//       </Stack.Navigator> */}
//     </NavigationContainer >


//   )
// }

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RootStack" component={RootStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
      {/* <RootStack />
      <AppStack /> */}
    </NavigationContainer>
  );
}

export default App;
