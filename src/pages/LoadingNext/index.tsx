import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/root';

// Defina o tipo para a navegação
type LoadingNextNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoadingNext'>;

export default function LoadingNext() {
  // Use os tipos definidos
  const navigation = useNavigation<LoadingNextNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'LoadingNext'>>();
  
  const { index } = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      // Agora o TypeScript conhece os tipos de navegação
      navigation.navigate('Question', { index });
    }, 500);

    return () => clearTimeout(timer);
  }, [index, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}