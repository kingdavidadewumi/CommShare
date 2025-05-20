import { useEffect, useState, useCallback } from "react";
import {
  MontserratAlternates_100Thin, MontserratAlternates_200ExtraLight, MontserratAlternates_300Light, MontserratAlternates_400Regular,
  MontserratAlternates_500Medium, MontserratAlternates_600SemiBold, MontserratAlternates_700Bold, MontserratAlternates_800ExtraBold, MontserratAlternates_900Black
} from "@expo-google-fonts/montserrat-alternates"
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Profile } from "./App/Screens/Profile";
import { Avatar, Button, Card } from "react-native-paper";
import { FontAwesome } from '@expo/vector-icons';
import { StackNavigator } from "./App/Navigator/Stack";
// import { StackNavigator } from "./App/Navigator/Stack";
// import {Icon} from 'react-native-vector-icons/FontAwesome';
// import { Ionicons } from '@expo/vector-icons';


// LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the 'deprecated-react-native-prop-types' package."])

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // await Font.loadAsync({ Fascinate_400Regular });
        await Font.loadAsync({ MontserratAlternates_100Thin });
        await Font.loadAsync({ MontserratAlternates_200ExtraLight });
        await Font.loadAsync({ MontserratAlternates_300Light });
        await Font.loadAsync({ MontserratAlternates_400Regular });
        await Font.loadAsync({ MontserratAlternates_500Medium });
        await Font.loadAsync({ MontserratAlternates_600SemiBold });
        await Font.loadAsync({ MontserratAlternates_700Bold });
        await Font.loadAsync({ MontserratAlternates_800ExtraBold });
        await Font.loadAsync({ MontserratAlternates_900Black });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <StackNavigator />
  );
}