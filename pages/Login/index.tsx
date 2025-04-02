import { ImageBackground, TextInput, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { useTheme } from '../../context/ThemeContext';
import ThemeToggleButton from "../../components/ThemeChange/ThemeChange";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";

export default function Login () {
    const [registrar, setRegistrar] = useState<boolean>(false);
    const [dataNascimento, setDataNascimento] = useState<string>("");
    const [dataNascimentoFormatada, setDataNascimentoFormatada] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { isDarkMode } = useTheme();

    const backgroundImage = isDarkMode 
    ? require('../../assets/backgroundDark.png') 
    : require('../../assets/backgroundWhite.png');

    const backgroundColor = isDarkMode ? '#202E38' : '#FFFFFF';

    const handleRegistrar = () => {
        setRegistrar(!registrar);
    };

    return (
        <View style={[styles.background, { backgroundColor }]}>
            <ImageBackground
                source={backgroundImage}
                style={styles.imageBackground}>
                <ThemeToggleButton />
                <View style={styles.container}>
                    <Logo />
                    {registrar ? (
                        <>
                        <TextInput 
                            style={isDarkMode ? styles.inputDark : styles.input} 
                            placeholder="Nome completo" 
                            onChangeText={(text) => setUsername(text)}  
                            placeholderTextColor={'#A8A8A8'}
                        />
                        <TextInput 
                            style={isDarkMode ? styles.inputDark : styles.input} 
                            placeholder="Email" 
                            onChangeText={(text) => setEmail(text)}  
                            placeholderTextColor={'#A8A8A8'}
                        />
                        <TextInput 
                            style={isDarkMode ? styles.inputDark : styles.input} 
                            placeholder="Senha" 
                            secureTextEntry 
                            onChangeText={(text) => setPassword(text)}  
                            placeholderTextColor={'#A8A8A8'}
                        />
                        <View style={styles.botoes}>
                            <Button
                                title="REGISTRAR"
                                onPress={() => {}}
                                style={styles.btnRegistrar}
                                textStyle={styles.txtEntrar}
                            />
                            <Button
                                title="CANCELAR"
                                onPress={handleRegistrar}
                                style={styles.btnCancelar}
                                textStyle={styles.txtRegistrar}
                            />
                        </View>
                        </>
                    ) : (
                        <>
                        <TextInput 
                            style={isDarkMode ? styles.inputDark : styles.input} 
                            placeholder="Email" 
                            placeholderTextColor={'#A8A8A8'}
                        />
                        <TextInput 
                            style={isDarkMode ? styles.inputDark : styles.input} 
                            placeholder="Senha" 
                            secureTextEntry 
                            placeholderTextColor={'#A8A8A8'}
                        />
                        <View style={styles.botoes}>
                            <Button
                                title="ENTRAR"
                                onPress={() => {}}
                                style={styles.btnEntrar}
                                textStyle={styles.txtEntrar}
                            />
                            <Button
                                title="REGISTRAR"
                                onPress={handleRegistrar}
                                style={styles.btnRegistrar}
                                textStyle={styles.txtRegistrar}
                            />
                        </View>
                        </>
                    )}
                </View>
            </ImageBackground>
        </View>
    );
}
