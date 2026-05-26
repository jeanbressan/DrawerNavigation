import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { estilosMcLaren as styles, Imagens } from "../styleSheet/Estilos";

function McLaren() {
  const pilotos = [
    { nome: "Lando Norris", numero: 1, pais: "Reino Unido" },
    { nome: "Oscar Piastri", numero: 81, pais: "Austrália" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={Imagens.mclaren} style={styles.imagem} />
        <Text style={styles.title}>McLaren F1 Team</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📖 História</Text>
        <Text style={styles.cardText}>
          Fundada em 1963 por Bruce McLaren, a McLaren é uma das equipes mais
          icônicas da Fórmula 1. Com sede em Woking, Inglaterra, possui 8 títulos
          de Construtores. Nos anos 80 e 90 foi dominante com pilotos lendários
          como Senna, Prost e Häkkinen.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>👨‍✈️ Pilotos</Text>
        {pilotos.map((p, i) => (
          <View key={i} style={styles.pilotoRow}>
            <Text style={styles.numero}>#{p.numero}</Text>
            <View>
              <Text style={styles.pilotoNome}>{p.nome}</Text>
              <Text style={styles.pilotoPais}>{p.pais}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default McLaren;