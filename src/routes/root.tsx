import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home';
import LoginScreen from '../pages/Login';
import { useAuth } from '../context/AuthContext';
import QuestionScreen from '../pages/Question';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Question: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
            />        
          <Stack.Screen
            name="Question"
            component={QuestionScreen}
            options={{ headerShown: false }}
            />  
          </>      
        ) : (
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
