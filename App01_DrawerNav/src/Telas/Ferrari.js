import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { estilosFerrari as styles, Imagens } from "../styleSheet/Estilos";

function Ferrari() {
  const pilotos = [
    { nome: "Charles Leclerc", numero: 16, pais: "Mônaco" },
    { nome: "Lewis Hamilton", numero: 44, pais: "Reino Unido" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={Imagens.ferrari} style={styles.imagem}/>
        <Text style={styles.title}>Scuderia Ferrari</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📖 História</Text>
        <Text style={styles.cardText}>
          Fundada em 1929 por Enzo Ferrari, a Scuderia Ferrari é a equipe mais
          antiga e vitoriosa da Fórmula 1. Com sede em Maranello, Itália, a equipe
          é símbolo de paixão, tradição e velocidade. Possui 16 títulos de
          Construtores e 15 de Pilotos.
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

export default Ferrari;