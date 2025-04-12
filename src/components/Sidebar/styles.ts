import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        opacity: 0.5,
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 9,
    },
    container: {
        position: 'absolute',
        width: '80%',
        height: '100%',
        zIndex: 10,
        paddingTop: 50,
        display: 'flex',
        padding: 15,
        justifyContent: "space-between",
        borderEndEndRadius: 30,
        borderEndStartRadius: 30
    },
    containerWhite: {
        backgroundColor: 'white',
        borderColor: '#E5E5E5'
    },
    containerDark: {
        backgroundColor: '#202E38',
        borderColor: '#3F4A52'
    },
    btnSidebar: {
        width: '100%',
        alignItems: "center",
        marginBottom: 15,
        borderWidth: 4,
        borderBottomWidth: 10,
        height: 60,
        borderRadius: 20,
        justifyContent: "center",
    },
    txtSidebar: {
        fontFamily: 'Baloo2-Bold',
        fontSize: 20
    },
    txtSidebarWhite: {
        color: '#325874'
    },
    txtSidebarDark: {
        color: '#FFF'
    },
    btnSair: {
        width: '100%',
        alignItems: "center",
        borderWidth: 4,
        borderBottomWidth: 10,
        borderColor: '#C2062E',
        backgroundColor: '#E40E3C',
        height: 60,
        borderRadius: 20,
        justifyContent: "center",
    },
    txtSair: {
        color: '#FFFFFF',
        fontFamily: 'Baloo2-Bold',
        fontSize: 20
    },
    btnSidebarWhite: {
        borderColor: '#325874',
        backgroundColor: '#FFFFFF',
    },
    btnSidebarDark: {
        borderColor: '#FFFFFF',
        backgroundColor: '#202E38',
    },
    perfil:{
        marginBottom: 15,
        padding: 10,
        borderWidth: 5,
        borderRadius: 20,
        flexWrap: "wrap",
        flexDirection: "row",
        display: "flex",
        alignItems: "center"
    },
    perfilWhite:{
        borderColor: '#325874',
        backgroundColor: '#325874',
    },
    perfilDark:{
        borderColor: "#FFF",
        backgroundColor: "#FFF",
    },
    imgPerfil:{
        height: 50,
        width: 50,
        backgroundColor: "#3F4A52",
        borderRadius: "100%",
        marginRight: 10
    },
    txtSidebarNome: {
        fontFamily: 'Baloo2-Bold',
        fontSize: 20,
        width: 190,
    },
    txtSidebarNomeDark: {
        color: '#202E38'
    },
})