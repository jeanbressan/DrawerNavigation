import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { estilosMercedes as styles, Imagens } from "../styleSheet/Estilos";

function Mercedes() {
  const pilotos = [
    { nome: "Kimi Antonelli", numero: 12, pais: "Itália" },
    { nome: "George Russell", numero: 63, pais: "Reino Unido" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={Imagens.mercedes} style={styles.imagem} />
        <Text style={styles.title}>Mercedes-AMG F1</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📖 História</Text>
        <Text style={styles.cardText}>
          A Mercedes dominou a Fórmula 1 entre 2014 e 2021, conquistando 8 títulos
          consecutivos de Construtores. Com sede em Brackley, Inglaterra, a equipe
          é conhecida pelas suas Flechas de Prata e pela parceria histórica
          com Lewis Hamilton, heptacampeão mundial.
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

export default Mercedes;