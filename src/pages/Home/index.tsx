import React from "react";
import { Text, Pressable, Image, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from "./styles";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Background from "../../components/Background/Background";
import Button from "../../components/Button/Button";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export default function Home() {
  const { isDarkMode } = useTheme();
  const navigation = useNavigation<NavigationProp<any>>(); // ou use seu tipo se tiver um RootStackParamList

  const book = require('../../assets/book.png');

  const backgroundImage = isDarkMode
    ? require('../../assets/backgroundDark.png')
    : require('../../assets/backgroundWhite.png');

  const backgroundColor = isDarkMode ? '#202E38' : '#FFFFFF';

  return (
    <>
      <Sidebar/>
      <Background backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
        <HeaderHome />
        <View style={styles.containt}>
          <Button
            title="MODO DESAFIO"
            onPress={() => {}}
            style={styles.btnModoDesafio}
            textStyle={styles.txtModoDesafio}
          />
          <View style={styles.materias}>
            <Pressable
              style={({ pressed }) => [styles.btnMateria, pressed && styles.btnMateriaPressed]}
              onPress={() => navigation.navigate("Question")}
            >
              <View style={styles.descricoesMateria}>
                <Text style={styles.txtMateria}>HISTÓRIA</Text>
                <Text style={styles.txtSerie}>8 ANO</Text>
              </View>
              <View>
                <Image source={book} style={styles.book} />
              </View>
            </Pressable>
          </View>
        </View>
      </Background>
    </>
  );
}
