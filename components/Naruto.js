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
        <Text style={estilo.titulo}> Naruto</Text>
        <ScrollView>
        <Image style={estilo.img} resizeMode={"contain"} source={{uri:'https://pm1.narvii.com/6240/c3313526c75c89fecd18e46909cc160b4bab29a8_hq.jpg'}}/>
        <Text style={estilo.subtitulo}>História de Naruto</Text>
        <Text style={estilo.conteudo}>História de Naruto refere-se à cronologia de eventos que transcorrem no mundo ficcional onde se situa Naruto, uma série de mangá criada por Masashi Kishimoto e serializada na revista semanal Weekly Shōnen Jump desde 2015. A série se passa em um mundo em que ninjas podem usar o chakra para criar jutsus e realizar feitos super humanos aumentando suas habilidades físicas com taijutsu, usando ninjutsu para controlar os cinco elementos (fogo, vento, eletricidade, terra, água) ou Genjutsu para criar ilusões na mente de seu adversário. Esses ninjas se organizam e fundam Vilas Ocultas que recebem pedidos de missões de outros habitantes, as cinco maiores e mais importantes dessas vilas possuem um Kage como líder, que é o ninja mais forte e mais qualificado para o comando geral. Originalmente, os jutsus deveriam ser usados para pacificar o mundo, que era dominado pelo caos e o ódio, mas alguns ninjas passaram a criar e aprender jutsus para benefício próprio e até mesmo para fazer o mal,causando um desequilíbrio no mundo ninja. A ambição e a busca pelo poder absoluto faz com que às vezes algumas vilas se desentendam e provoquem uma guerra entre si, e alguns ninjas que desrespeitam as leis são expulsos e se tornam criminosos foragidos. Existem também os chamados Bijū, criaturas com um imenso poder que para não causar a destruição, são seladas dentro de crianças recém-nascidas denominadas jinchuurikis, os jinchuurikis que aprendem a controlar o poder de seu bijuu tornam-se extremamente poderosos e perigosos, até para si mesmos.</Text>
        <Text style={estilo.conteudo1}>A história principal da série segue Naruto Uzumaki e seus amigos, Sasuke Uchiha e Sakura Haruno, que juntos formam um time de três pessoas nomeado Time 7 e liderado por Kakashi Hatake. Como todos os times ninjas de todas as Vilas Ocultas, o Time 7 é encarregado de completar diversos pedidos de missões que chegam na vila. Com o tempo Naruto descobre que possui um dos nove bijuus selado dentro de seu corpo, a chamada Kyuubi, treina e adquire novas habilidades, faz novos companheiros, perde amigos, e encontra os mais perigosos ninjas, procurados por todas as vilas, como Orochimaru e a Akatsuki.</Text>
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
  conteudo1:{
    fontSize: 18,
    textAlign:'justify',
    marginTop: 0,
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