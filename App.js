import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import configBiscoito from './hooks/configBiscoito';

export default function App(){
  const{
    imagem,
    mensagem,
    quebrarBiscoito,
    reiniciar
  } = configBiscoito();

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>🥠 Biscoito da Sorte ✨</Text>

      <Image source={imagem} style={styles.imagem} />

      <Text style={styles.mensagem}>{mensagem}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebrarBiscoito}>
        <Text style={styles.botaoTexto}>Quebrar Biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoReiniciar]} onPress={reiniciar}>
        <Text style={styles.botaoTexto}>Tente de novo!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 28,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  mensagem: {
    fontSize: 18,
    color: '#fff',
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 20,
  },
  botao: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    padding: 14,
    marginTop: 10,
    width: 200,
    alignItems: 'center',
  },
  botaoReiniciar: {
    backgroundColor: '#999890',
  },
  botaoTexto: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});