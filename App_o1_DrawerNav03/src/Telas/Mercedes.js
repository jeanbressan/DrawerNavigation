import React from 'react';
import { View, Text } from 'react-native';
import { estilos, cores } from '../styleSheet/Estilos';

export default function Sobre() {
  return (
    <View style={[estilos.container, { backgroundColor: cores.mercedes }]}>
      <Text style={[estilos.titulo, { color: cores.textoClaro }]}>
        AMG Mercedes
      </Text>
      <Text style={[estilos.subtitulo, { color: cores.textoClaro }]}>
        A Mercedes dominou a Fórmula 1 entre 2014 e 2021, conquistando 8 títulos
          consecutivos de Construtores. Com sede em Brackley, Inglaterra, a equipe
          é conhecida pelas suas Flechas de Prata e pela parceria histórica
          com Lewis Hamilton, heptacampeão mundial.
      </Text>
    </View>
  );
}