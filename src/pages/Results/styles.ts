import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 100,
    },
    noResults: {
        flex: 1,
        textAlign: 'center',
        marginTop: 50,
        fontSize: 18,
        color: '#000',
    },
    noResultsDark: {
        color: '#FFF',
    },
    summaryContainer: {
        marginBottom: 30,
    },
    performanceText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#000',
    },
    performanceTextDark: {
        color: '#FFF',
    },
    scoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    scoreCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scorePercentage: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF',
    },
    scoreLabel: {
        fontSize: 14,
        color: '#FFF',
    },
    detailScores: {
        flex: 1,
        marginLeft: 20,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 8,
        color: '#000',
    },
    detailTextDark: {
        color: '#FFF',
    },
    questionsList: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#000',
    },
    sectionTitleDark: {
        color: '#FFF',
    },
    questionItem: {
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
    },
    questionItemLight: {
        backgroundColor: '#F5F5F5',
    },
    questionItemDark: {
        backgroundColor: '#2D3843',
    },
    questionText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#000',
    },
    questionTextDark: {
        color: '#FFF',
    },
    correct: {
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    wrong: {
        color: '#F44336',
        fontWeight: 'bold',
    },
    grade: {
        color: '#2196F3',
        fontWeight: 'bold',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
});