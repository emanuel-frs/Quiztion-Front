// screens/Results.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Background from '../../components/Background/Background';
import { useTheme } from '../../context/ThemeContext';
import { useQuiz } from '../../context/QuizContext';
import HeaderDefault from '../../components/HeaderDefault/HeaderDefault';
import Button from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/root';
import { styles } from './styles';

type ResultsNavigationProp = StackNavigationProp<RootStackParamList, 'Results'>;

export default function Results() {
    const { isDarkMode } = useTheme();
    const { questoes, respostas, resetQuiz } = useQuiz();
    const navigation = useNavigation<ResultsNavigationProp>();

    const backgroundImage = isDarkMode 
        ? require('../../assets/backgroundDark.png') 
        : require('../../assets/backgroundWhite.png');

    const backgroundColor = isDarkMode ? '#202E38' : '#FFFFFF';
    
    // Trata caso onde não há questões
    if (!questoes.length) {
        return (
            <Background backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
                <Text style={[styles.noResults, isDarkMode && styles.noResultsDark]}>
                    Nenhum resultado disponível
                </Text>
            </Background>
        );
    }

    const totalQuestoes = questoes.length;
    const acertos = Object.values(respostas).filter(acertou => acertou).length;
    const nota = totalQuestoes > 0 ? (acertos / totalQuestoes) * 10 : 0;
    const porcentagemAcertos = totalQuestoes > 0 ? (acertos / totalQuestoes) * 100 : 0;

    const handleRestart = () => {
        resetQuiz();
        navigation.navigate('Home');
    };

    const getPerformanceMessage = () => {
        if (porcentagemAcertos >= 80) return 'Excelente!';
        if (porcentagemAcertos >= 60) return 'Bom trabalho!';
        if (porcentagemAcertos >= 40) return 'Pode melhorar!';
        return 'Continue praticando!';
    };

    return (
        <Background backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
            <HeaderDefault 
                materia="Resultados" 
                showBackButton={false}
            />
            
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.summaryContainer}>
                    <Text style={[styles.performanceText, isDarkMode && styles.performanceTextDark]}>
                        {getPerformanceMessage()}
                    </Text>
                    
                    <View style={styles.scoreContainer}>
                        <View style={styles.scoreCircle}>
                            <Text style={styles.scorePercentage}>{porcentagemAcertos.toFixed(0)}%</Text>
                            <Text style={styles.scoreLabel}>de acerto</Text>
                        </View>
                        
                        <View style={styles.detailScores}>
                            <Text style={[styles.detailText, isDarkMode && styles.detailTextDark]}>
                                <Text style={styles.correct}>✓</Text> {acertos} acertos
                            </Text>
                            <Text style={[styles.detailText, isDarkMode && styles.detailTextDark]}>
                                <Text style={styles.wrong}>✗</Text> {totalQuestoes - acertos} erros
                            </Text>
                            <Text style={[styles.detailText, isDarkMode && styles.detailTextDark]}>
                                Nota final: <Text style={styles.grade}>{nota.toFixed(1)}</Text>
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.questionsList}>
                    <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
                        Detalhes por questão:
                    </Text>
                    
                    {questoes.map((questao, index) => (
                        <View 
                            key={questao.idQuestao} 
                            style={[
                                styles.questionItem,
                                isDarkMode ? styles.questionItemDark : styles.questionItemLight
                            ]}
                        >
                            <Text style={[styles.questionText, isDarkMode && styles.questionTextDark]}>
                                {index + 1}. {questao.enunciado}
                            </Text>
                            <Text style={respostas[questao.idQuestao] ? styles.correct : styles.wrong}>
                                {respostas[questao.idQuestao] ? '✓ Acertou' : '✗ Errou'}
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <Button 
                    title="Voltar ao Início" 
                    onPress={handleRestart}
                    style={{}}
                    textStyle={{}}
                />
            </View>
        </Background>
    );
}