import { Pressable, View } from "react-native";
import { styles } from "./styles";
import { useSidebar } from "../../context/SidebarContext";
import ButtonHeader from "../ButtonSidebar/ButtonSidebar";
import { useTheme } from "../../context/ThemeContext";

export function Sidebar() {
    const { sidebar, setSidebar } = useSidebar();
    const { isDarkMode, toggleTheme } = useTheme();

    if (!sidebar) return null;

    return (
        <>
            <Pressable style={styles.background} onPress={() => setSidebar(false)} />
            <View style={[isDarkMode ? styles.containerDark : styles.containerWhite, styles.container]}>
                <View>
                    <ButtonHeader
                        title="INÍCIO"
                        onPress={() => {}}
                        style={[isDarkMode ? styles.btnSidebarDark : styles.btnSidebarWhite, styles.btnSidebar]}
                        textStyle={[isDarkMode ? styles.txtSidebarDark : styles.txtSidebarWhite, styles.txtSidebar]}
                    />
                    <ButtonHeader
                        title="RANKING"
                        onPress={() => {}}
                        style={[isDarkMode ? styles.btnSidebarDark : styles.btnSidebarWhite, styles.btnSidebar]}
                        textStyle={[isDarkMode ? styles.txtSidebarDark : styles.txtSidebarWhite, styles.txtSidebar]}
                    />
                    <ButtonHeader
                        title="MUDAR TEMA"
                        onPress={toggleTheme}
                        style={[isDarkMode ? styles.btnSidebarDark : styles.btnSidebarWhite, styles.btnSidebar]}
                        textStyle={[isDarkMode ? styles.txtSidebarDark : styles.txtSidebarWhite, styles.txtSidebar]}
                    />
                    <ButtonHeader
                        title="SOBRE NÓS"
                        onPress={() => {}}
                        style={[isDarkMode ? styles.btnSidebarDark : styles.btnSidebarWhite, styles.btnSidebar]}
                        textStyle={[isDarkMode ? styles.txtSidebarDark : styles.txtSidebarWhite, styles.txtSidebar]}
                    />
                </View>
                <ButtonHeader
                    title="SAIR DA CONTA"
                    onPress={() => {}}
                    style={styles.btnSair}
                    textStyle={styles.txtSair}
                />
            </View>
        </>
    );
}
