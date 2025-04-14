import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { getQuestoesByMateria } from '../../services/api';
import { useQuiz } from '../../context/QuizContext';
import { styles } from './styles';

type Params = {
  params: {
    materia: {
      idMateria: number;
      nome: string;
      ano: number;
    };
  };
};

type NavigationProps = {
    navigate: (screen: string, params?: { index: number }) => void;
};

export default function LoadingQuestions() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProp<Params, 'params'>>();
  const { materia } = route.params;
  const { setQuestoes } = useQuiz();

  useEffect(() => {
    const fetchQuestoes = async () => {
      try {
        console.log(materia)
        const data = await getQuestoesByMateria(materia.idMateria);
        const questoesAleatorias = embaralharArray(data);
        setQuestoes(questoesAleatorias);
        navigation.navigate('Question' as never, { index: 0 } as never);
      } catch (err) {
        console.error('Erro ao carregar questões:', err);
      }
    };

    fetchQuestoes();
  }, [materia.idMateria, setQuestoes, navigation]);

  const embaralharArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.text}>Carregando questões...</Text>
    </View>
  );
}
