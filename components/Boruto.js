import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, ReggaeOne_400Regular } from '@expo-google-fonts/reggae-one';

export default function Boruto(){
  let [fontsLoaded] = useFonts({
    ReggaeOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Boruto</Text>
        <ScrollView>
        <Image style={estilo.img} resizeMode={"contain"} source={{uri:'https://vignette.wikia.nocookie.net/deathbattlefanon/images/6/60/Boruto_Time_Skip.png/revision/latest?cb=20190710032029'}}/>
        <Text style={estilo.subtitulo}> Conheça a história de Naruto!</Text>
        <Text style={estilo.conteudo}>Naruto é uma série de mangá japonesa escrita e ilustrada por Masashi Kishimoto. Conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o líder máximo e mais poderoso de sua vila. A série é baseada em um one-shot de Kishimoto publicado na edição de agosto de 1997 da revista Akamaru Jump.</Text>
        <Text style={estilo.conteudo}>Naruto foi serializado na revista Weekly Shonen Jump da edição 43 de 1999 até a edição 50 de 2014, com os capítulos reunidos em setenta e dois volumes tankobon pela editora Shueisha. Mais tarde o mangá foi adaptado para anime, que foi produzido pelo Studio Pierrot e Aniplex. Estreou no Japão pela TV Tokyo e outras emissoras TX Networks em 3 de outubro de 2002. A primeira fase teve 220 episódios, enquanto a segunda fase, chamada de Naruto Shippuden, estreou dia 15 de fevereiro de 2007 e vai ao ar até hoje. Além da série de TV, o Studio Pierrot desenvolveu dez filmes e vários OVAs. Outros produtos, como light novels, cards colecionáveis e vídeo games, também foram desenvolvidos por diversas empresas.</Text>
        </ScrollView>
        </View>

    );
}
}

const largura = Dimensions.get('screen').width;
const estilo = StyleSheet.create({
  img:{
    width: largura,
    height: 350,
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700'
  },
  titulo:{
    marginTop: 35,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    backgroundColor: '#6495ED',
    color: '#F0FFFF',
    fontFamily: 'ReggaeOne_400Regular'
  },
  conteudo:{
    fontSize: 18,
    textAlign:'justify',
    margin: 10,
    padding: 5,
  },
  subtitulo:{
    margin: 20,
    marginBottom:20,
    fontSize: 10,
    textAlign: 'left',
  }
});