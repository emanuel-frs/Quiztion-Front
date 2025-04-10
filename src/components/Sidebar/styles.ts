import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        opacity: 0.5,
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1
    },
    container: {
        position: 'absolute',
        width: '80%',
        height: '100%',
        zIndex: 10,
        paddingTop: 110,
        display: 'flex',
        padding: 15,
        justifyContent: "space-between"
    },
    containerWhite: {
        backgroundColor: 'white'
    },
    containerDark: {
        backgroundColor: '#202E38'
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
        marginBottom: 15,
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
})