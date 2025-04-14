import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    titleDark: {
        color: '#FFF'
    },
    score: {
        fontSize: 32,
        marginBottom: 10
    },
    scoreDark: {
        color: '#FFF'
    },
    grade: {
        fontSize: 28,
        marginBottom: 30
    },
    gradeDark: {
        color: '#FFF'
    },
    questionItem: {
        width: '100%',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: '#F5F5F5'
    },
    questionText: {
        fontSize: 16
    },
    questionTextDark: {
        color: '#333'
    },
    correct: {
        color: 'green',
        fontWeight: 'bold'
    },
    wrong: {
        color: 'red',
        fontWeight: 'bold'
    }
});