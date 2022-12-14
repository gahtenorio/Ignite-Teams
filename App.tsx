import { ThemeProvider } from 'styled-components';

import { Loading } from '@components/Loading';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { Groups } from '@screens/Groups';

import theme from './src/theme';
import { NewGroup } from '@screens/NewGroup';
import { StatusBar } from 'react-native';
import { Players } from '@screens/Players';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });



  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor="transparent" />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}