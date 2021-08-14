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
        <Text style={estilo.titulo}>Saitama</Text>
        <ScrollView>
        <Image style={estilo.img} resizeMode={"contain"} source={{uri:'https://i.redd.it/h3jmcljecnt21.jpg'}}/>
        <Text style={estilo.subtitulo}> Conheça a história de Saitama!</Text>
        <Text style={estilo.conteudo}>A prefeitura de Saitama antigamente fazia parte da província de Musashi.[3]

No 43º ano da era Keiun (708), depósitos de ferro foram encontrados no distrito de Chichibu, que hoje faz parte da prefeitura de Saitama.

A região de Saitama é historicamente conhecida como uma área de agricultura fértil que produzia grande parte dos alimentos da região de Kanto. Durante o período Edo, muitos daimyos fudai dominavam os pequenos domínios da região de Saitama.</Text>
        <Text style={estilo.conteudo}>Após a Segunda Guerra Mundial, como Tóquio se expandia rapidamente os meios de transportes antigos permitiam viagens mais longas, a falta de terra disponível em Tóquio levou ao rápido desenvolvimento da prefeitura de Saitama, cuja população praticamente triplicou desde 1960. A maioria das cidades da prefeitura estão bem conectadas ao centro de Tóquio por ferrovias metropolitanas e funcionam como subúrbios residenciais e comerciais de Tóquio.</Text>
        </ScrollView>
        </View>

    );
}
}

const largura = Dimensions.get('screen').width;
const estilo = StyleSheet.create({
  img:{
    width: largura,
    height: 250,
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