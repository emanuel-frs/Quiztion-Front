import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containt: {
        padding: 20,
        alignItems: 'center'
    },
    btnModoDesafio: {
        width: '100%',
        alignItems: "center",
        marginBottom: 20,
        borderWidth: 4,
        borderBottomWidth: 10,
        borderColor: '#119E68',
        backgroundColor: '#2CCB8E',
        height: 60,
        borderRadius: 20,
        justifyContent: "center",
    },
    txtModoDesafio: {
        color: 'white',
        fontFamily: 'Baloo2-SemiBold',
        fontSize: 20
    },
    materias: {
        padding: 0,
        width: '100%'
    },
    btnMateria: {
        flexDirection: "row",
        width: '100%',
        alignItems: "center",
        marginBottom: 20,
        borderWidth: 4,
        borderBottomWidth: 10,
        borderColor: '#C2062E',
        backgroundColor: '#E40E3C',
        borderRadius: 20,
        justifyContent: "center",
        height: 110
    },
    descricoesMateria: {
        flex: 1,
        paddingLeft: 20,
        paddingVertical: 15
    },
    book: {
        flex: 1,
        justifyContent: "flex-end"
    },
    txtMateria: {
        color: 'white',
        fontFamily: 'Baloo2-SemiBold',
        fontSize: 25,
        marginBottom: -5
    },
    txtSerie: {
        color: '#980724',
        fontFamily: 'Baloo2-ExtraBold',
        fontSize: 20,
    },
    btnPressed: {
        borderWidth: 4,
        borderBottomWidth: 4,
        height: 50,
        marginTop:10
    },
    btnMateriaPressed: {
        borderWidth: 4,
        borderBottomWidth: 4,
        marginTop:10,
        height: 100
    },
})