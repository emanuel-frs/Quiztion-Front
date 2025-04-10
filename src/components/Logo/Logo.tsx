import { Text, View } from "react-native";
import { styles } from "./styles"
import { useTheme } from "../../context/ThemeContext";

export default function Logo () {
    const {isDarkMode} = useTheme();

    return (
        <View style={styles.logo}>
            <Text style={[styles.quiz, styles.fontLogo]}>QUIZ</Text>
            <Text style={[isDarkMode? styles.tionDark : styles.tion, styles.fontLogo]}>TION</Text>
        </View>
    )
}