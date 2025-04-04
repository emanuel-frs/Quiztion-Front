import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Login from './pages/Login';
import { ThemeProvider } from './context/ThemeContext';
import { Home } from './pages/Home';
import { SidebarProvider } from './context/SidebarContext';
import { useEffect } from 'react';

export default function App() {
  //useEffect(() => {
    useFonts({
      'Baloo2-Regular': require('./assets/fonts/Baloo2-Regular.ttf'),
      'Baloo2-Medium': require('./assets/fonts/Baloo2-Medium.ttf'),
      'Baloo2-SemiBold': require('./assets/fonts/Baloo2-SemiBold.ttf'),
      'Baloo2-Bold': require('./assets/fonts/Baloo2-Bold.ttf'),
      'Baloo2-ExtraBold': require('./assets/fonts/Baloo2-ExtraBold.ttf'),
    });
  //},[])

  return (
    <SidebarProvider>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </SidebarProvider>
  );
}

