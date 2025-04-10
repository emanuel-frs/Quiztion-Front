import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  btn: {
    borderWidth: 4,               // Borda comum para todos os botões
    borderBottomWidth: 10,        // Borda inferior mais grossa
    height: 60,                   // Altura comum para os botões
    borderRadius: 20,             // Bordas arredondadas
    justifyContent: 'center',     // Alinha o texto no centro
    alignItems: 'center',         // Alinha o texto no centro
    width: '100%',                // Largura total para o botão
    marginBottom: 20,             // Espaçamento inferior entre os botões
  },
  btnPressed: {
    borderWidth: 4,               // Borda comum no estado pressionado
    borderBottomWidth: 4,         // Borda inferior mais fina no estado pressionado
    height: 50,                   // Menor altura no estado pressionado
    marginTop: 10,                // Espaçamento superior para o efeito de pressionado
  },
  txt: {
    color: 'white',               // Cor do texto (branco) para todos os botões
    fontFamily: 'Baloo2-SemiBold', // Fonte comum para o texto dos botões
    fontSize: 20,                 // Tamanho de fonte comum
  },
});
