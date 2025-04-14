import React, { useEffect, useState } from "react";
import { Text, Pressable, Image, View, ActivityIndicator } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from "./styles";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Background from "../../components/Background/Background";
import Button from "../../components/Button/Button";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ScrollView } from "react-native-gesture-handler";
import { getMaterias } from "../../services/api";

interface Materia {
  id: number;
  nome: string;
  ano: number;
}

export default function Home() {
  const { isDarkMode } = useTheme();
  const navigation = useNavigation<NavigationProp<any>>();
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const book = require('../../assets/book.png');

  const backgroundImage = isDarkMode
    ? require('../../assets/backgroundDark.png')
    : require('../../assets/backgroundWhite.png');

  const backgroundColor = isDarkMode ? '#202E38' : '#FFFFFF';

  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const data = await getMaterias();
        setMaterias(data);
      } catch (err) {
        setError('Erro ao carregar matérias');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterias();
  }, []);

  const handleMateriaPress = (materia: Materia) => {
    navigation.navigate("LoadingQuestions", { materia });
  };  

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={isDarkMode ? '#FFF' : '#000'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <>
      <Sidebar/>
      <Background backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
        <HeaderHome />
        <ScrollView contentContainerStyle={styles.containt}>
          <Button
            title="MODO DESAFIO"
            onPress={() => {}}
            style={styles.btnModoDesafio}
            textStyle={styles.txtModoDesafio}
          />
          <View style={styles.materias}>
            {materias.map((materia) => (
              <Pressable
                key={`${materia.id}-${materia.nome}`}
                style={({ pressed }) => [styles.btnMateria, pressed && styles.btnMateriaPressed]}
                onPress={() => handleMateriaPress(materia)}
              >
                <View style={styles.descricoesMateria}>
                  <Text style={styles.txtMateria}>{materia.nome.toUpperCase()}</Text>
                  <Text style={styles.txtSerie}>{materia.ano} ANO</Text>
                </View>
                <View>
                  <Image source={book} style={styles.book} />
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </Background>
    </>
  );
}