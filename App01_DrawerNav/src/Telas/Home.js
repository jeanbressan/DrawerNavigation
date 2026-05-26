import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { estilosHome as styles, Imagens } from "../styleSheet/Estilos";

function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>

        <Image source={require("../Imagens/f1.png")}
        style={styles.imagem}/>

        <Text style={styles.title}>Fórmula 1</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>O que é a Fórmula 1?</Text>
        <Text style={styles.cardText}>
          A Fórmula 1 é a principal categoria do automobilismo mundial, regulamentada
          pela FIA (Federação Internacional de Automobilismo). É considerada o auge
          da tecnologia e da velocidade no esporte a motor.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📅 Temporada</Text>
        <Text style={styles.cardText}>
          O campeonato é disputado anualmente em circuitos ao redor do mundo,
          com corridas na Europa, Américas, Ásia, Oriente Médio e Oceania.
          São cerca de 20 a 24 etapas por temporada.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>⚡ Tecnologia</Text>
        <Text style={styles.cardText}>
          Os carros de F1 são verdadeiras obras de engenharia. Aceleram de 0 a 100 km/h
          em menos de 2,5 segundos e podem atingir mais de 350 km/h. Utilizam motores
          híbridos de 1.6L V6 turbo com unidades de recuperação de energia.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🏆 Campeonatos</Text>
        <Text style={styles.cardText}>
          Existem dois títulos disputados a cada temporada: o Campeonato de
          Pilotos e o Campeonato de Construtores. Use o menu lateral para
          conhecer as equipes Ferrari, Mercedes e McLaren!
        </Text>
      </View>
    </ScrollView>
  );
}

export default Home;