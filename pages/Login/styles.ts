import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
    },
    container: {
        width: "100%",
        padding: 30,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#C3C3C3',
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
        fontFamily: 'Baloo2-SemiBold',
        color: '#325874',
    },
    inputDark: {
        backgroundColor: '#202E38',
        borderWidth: 2,
        borderColor: '#7E7E7E',
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
        fontFamily: 'Baloo2-Bold',
        color: 'white',
    },
    btnEntrar: {
        borderWidth: 4,
        borderBottomWidth: 10,
        borderColor: '#119E68',
        backgroundColor: '#2CCB8E',
        width: '100%',
        height: 60,
        justifyContent: "center",
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 20
    },
    btnRegistrar: {
        borderWidth: 4,
        borderBottomWidth: 10,
        borderColor: '#C2062E',
        backgroundColor: '#E40E3C',
        width: '100%',
        height: 60,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'center',
    },
    btnCancelar: {
        marginTop: 20,
        borderWidth: 4,
        borderBottomWidth: 10,
        borderColor: '#8D8D8D',
        backgroundColor: '#ACACAC',
        width: '100%',
        height: 60,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'center',
    },
    txtEntrar:{
        color: 'white',
        fontFamily: 'Baloo2-SemiBold',
        fontSize: 20
    },
    txtRegistrar: {
        color: 'white',
        fontFamily: 'Baloo2-SemiBold',
        fontSize: 20
    },
    botoes: {
        width: '100%',
        alignItems: "center"
    },
    error: {
        color: 'red', 
        marginTop: -20, 
        paddingBottom: 20, 
        textAlign: "center"
    },
    themeToggleButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 1,
    },    
    btnPressed: {
        borderWidth: 4,
        borderBottomWidth: 4,
        height: 50,
        marginTop:10
    },
    btnBottomPressed: {
        borderWidth: 4,
        borderBottomWidth: 4,
        height: 50,
        marginTop:30
    },
});
