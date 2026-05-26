import { StyleSheet } from "react-native";

export const estilosHome = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1a1a2e" },
  header: { backgroundColor: "#e10600", padding: 30, alignItems: "center" },
  title: { fontSize: 32, fontWeight: "bold", color: "#fff" },
  subtitle: { fontSize: 16, color: "#fff", marginTop: 5, opacity: 0.9 },
  card: {
    backgroundColor: "#16213e", margin: 12, borderRadius: 10,
    padding: 16, borderLeftWidth: 4, borderLeftColor: "#e10600"},
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#fff", marginBottom: 8 },
  cardText: { fontSize: 14, color: "#ccc", lineHeight: 22 },
  
  imagem: {width: 100, height: 100, resizeMode: "contain", marginBottom: 8},
});

export const estilosFerrari = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1a0000" },
  header: { backgroundColor: "#c8102e", padding: 30, alignItems: "center" },
  emoji: { fontSize: 48 },
  title: { fontSize: 28, fontWeight: "bold", color: "#fff", marginTop: 8 },
  subtitle: { fontSize: 14, color: "#fff", opacity: 0.85, marginTop: 4 },
  card: {
    backgroundColor: "#2a0a0a", margin: 12, borderRadius: 10,
    padding: 16, borderLeftWidth: 4, borderLeftColor: "#c8102e"},
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#fff", marginBottom: 8 },
  cardText: { fontSize: 14, color: "#ccc", lineHeight: 22 },
  pilotoRow: { flexDirection: "row", alignItems: "center", marginVertical: 6 },
  numero: { fontSize: 22, fontWeight: "bold", color: "#c8102e", marginRight: 12, width: 40 },
  pilotoNome: { fontSize: 16, color: "#fff", fontWeight: "bold" },
  pilotoPais: { fontSize: 13, color: "#aaa" },

  imagem: { width: 80, height: 80, resizeMode: "contain", marginBottom: 8},
});

export const estilosMercedes = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a1a1a" },
  header: { backgroundColor: "#00d2be", padding: 30, alignItems: "center" },
  emoji: { fontSize: 48 },
  title: { fontSize: 28, fontWeight: "bold", color: "#000", marginTop: 8 },
  subtitle: { fontSize: 14, color: "#000", opacity: 0.75, marginTop: 4 },
  card: {
    backgroundColor: "#0d2626", margin: 12, borderRadius: 10,
    padding: 16, borderLeftWidth: 4, borderLeftColor: "#00d2be"},
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#fff", marginBottom: 8 },
  cardText: { fontSize: 14, color: "#ccc", lineHeight: 22 },
  pilotoRow: { flexDirection: "row", alignItems: "center", marginVertical: 6 },
  numero: { fontSize: 22, fontWeight: "bold", color: "#00d2be", marginRight: 12, width: 40 },
  pilotoNome: { fontSize: 16, color: "#fff", fontWeight: "bold" },
  pilotoPais: { fontSize: 13, color: "#aaa" },

  imagem: { width: 80, height: 80, resizeMode: "contain", marginBottom: 8},
});

export const estilosMcLaren = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1a0d00" },
  header: { backgroundColor: "#ff8000", padding: 30, alignItems: "center" },
  emoji: { fontSize: 48 },
  title: { fontSize: 28, fontWeight: "bold", color: "#fff", marginTop: 8 },
  subtitle: { fontSize: 14, color: "#fff", opacity: 0.85, marginTop: 4 },
  card: {
    backgroundColor: "#2a1500", margin: 12, borderRadius: 10,
    padding: 16, borderLeftWidth: 4, borderLeftColor: "#ff8000"},
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#fff", marginBottom: 8 },
  cardText: { fontSize: 14, color: "#ccc", lineHeight: 22 },
  pilotoRow: { flexDirection: "row", alignItems: "center", marginVertical: 6 },
  numero: { fontSize: 22, fontWeight: "bold", color: "#ff8000", marginRight: 12, width: 40 },
  pilotoNome: { fontSize: 16, color: "#fff", fontWeight: "bold" },
  pilotoPais: { fontSize: 13, color: "#aaa" },

  imagem: { width: 80, height: 80, resizeMode: "contain", marginBottom: 8},
});

export const Imagens = {
  logoF1: require("../Imagens/f1.png"),
  ferrari: require("../Imagens/ferrari.png"),
  mercedes: require("../Imagens/mercedes.png"),
  mclaren: require("../Imagens/mclaren.png"),
};