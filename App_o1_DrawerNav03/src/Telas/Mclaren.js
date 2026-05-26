import React from 'react';
import { View, Text } from 'react-native';
import { estilos, cores } from '../styleSheet/Estilos';

export default function Contato() {
  return (
    <View style={[estilos.container, { backgroundColor: cores.mclaren }]}>
      <Text style={[estilos.titulo, { color: cores.textoClaro }]}>
        McLaren
      </Text>
      <Text style={[estilos.subtitulo, { color: cores.textoClaro }]}>
        Fundada em 1963 por Bruce McLaren, a McLaren é uma das equipes mais
          icônicas da Fórmula 1. Com sede em Woking, Inglaterra, possui 8 títulos
          de Construtores. Nos anos 80 e 90 foi dominante com pilotos lendários
          como Senna, Prost e Häkkinen.
      </Text>
    </View>
  );
}