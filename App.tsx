import { useFonts } from 'expo-font';
import { ThemeProvider } from './src/context/ThemeContext';
import { Home } from './src/pages/Home';
import { SidebarProvider } from './src/context/SidebarContext';

export default function App() {

  useFonts({
    'Baloo2-Regular': require('./assets/fonts/Baloo2-Regular.ttf'),
    'Baloo2-Medium': require('./assets/fonts/Baloo2-Medium.ttf'),
    'Baloo2-SemiBold': require('./assets/fonts/Baloo2-SemiBold.ttf'),
    'Baloo2-Bold': require('./assets/fonts/Baloo2-Bold.ttf'),
    'Baloo2-ExtraBold': require('./assets/fonts/Baloo2-ExtraBold.ttf'),
  });

  return (
    <SidebarProvider>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </SidebarProvider>
  );
}

