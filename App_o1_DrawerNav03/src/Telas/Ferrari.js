import React from 'react';
import { View, Text } from 'react-native';
import { estilos, cores } from '../styleSheet/Estilos';

export default function Home() {
  return (
    <View style={[estilos.container, { backgroundColor: cores.ferrari }]}>
      <Text style={[estilos.titulo, { color: cores.textoClaro }]}>
        Ferrari
      </Text>
      <Text style={[estilos.subtitulo, { color: cores.textoClaro }]}>
        Fundada em 1929 por Enzo Ferrari, a Scuderia Ferrari é a equipe mais
          antiga e vitoriosa da Fórmula 1. Com sede em Maranello, Itália, a equipe
          é símbolo de paixão, tradição e velocidade.
      </Text>
    </View>
  );
}