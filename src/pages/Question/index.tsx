import { View } from 'react-native';
import Background from '../../components/Background/Background';
import HeaderDefault from '../../components/HeaderDefault/HeaderDefault';
import { useTheme } from '../../context/ThemeContext';
import { Text } from 'react-native';
import { styles } from './styles';
import QuestionGroup from '../../components/QuestionGroup/QuestionGroup';

export default function Question () {
    const { isDarkMode } = useTheme();

    const options = [
        {
          title: 'A Corrida Espacial entre EUA e URSS.',
          onPress: () => console.log('Opção 1'),
        },
        {
          title: 'Criação da OTAN.',
          onPress: () => console.log('Opção 2'),
        },
        {
          title: 'Queda do Muro de Berlim.',
          onPress: () => console.log('Opção 3'),
        },
        {
          title: 'Revolução Francesa.',
          onPress: () => console.log('Opção 4'),
        },
      ];
    
    const backgroundImage = isDarkMode 
    ? require('../../assets/backgroundDark.png') 
    : require('../../assets/backgroundWhite.png');

    const backgroundColor = isDarkMode ? '#202E38' : '#FFFFFF';

    return (
        <>
        <Background backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
            <HeaderDefault />
            <View style={styles.containt}>
                <View style={[styles.containerQuestion, isDarkMode ? styles.containerDark : styles.containerWhite]}>
                    <Text style={[isDarkMode ? styles.textDark : styles.textWhite, styles.textDefault]}>
                        1 - A Guerra Fria foi um período de tensão geopolítica entre os Estados Unidos 
                        e a União Soviética, caracterizado pela disputa entre o capitalismo e o socialismo. 
                        Durante esse período, ocorreram vários eventos que marcaram a rivalidade entre 
                        as duas potências. Qual dos eventos abaixo NÃO está relacionado à Guerra Fria?
                    </Text>
                </View>
                <QuestionGroup options={options}/>
            </View>
        </Background>
        </>
    )
}