import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { View, Text, Pressable, Animated } from "react-native";
import { styles } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { playClickSound } from "../../utills/sound";

export default function HeaderDefault() {
    const { isDarkMode } = useTheme();
    const navigation = useNavigation<NavigationProp<any>>();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const handlePress = () => {
        playClickSound();
        navigation.navigate('Home');
    };

    return (
        <View
            style={[
                isDarkMode ? styles.containerDark : styles.containerWhite,
                styles.container,
            ]}
        >
            <Pressable style={styles.menu} onPress={handlePress}>
                <Ionicons name="chevron-back" size={30} color={isDarkMode ? "#FFF" : "#325874"} />
            </Pressable>
            <View style={styles.logo}>
                <Text style={[styles.quiz, styles.fontLogo]}>QUIZ</Text>
                <Text style={[isDarkMode ? styles.tionDark : styles.tion, styles.fontLogo]}>TION</Text>
            </View>
            <View style={styles.aux}>
                <Ionicons name="ellipsis-vertical" size={30} color={isDarkMode ? "#FFF" : "#325874"} />
            </View>
        </View>
    );
}
