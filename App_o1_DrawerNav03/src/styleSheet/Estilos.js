import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16, 
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center', 
  },
  subtitulo: {
    fontSize: 16,
    marginTop: 4,
    textAlign: 'center', 
    paddingHorizontal: 10, 
  },
});

export const cores = {
  ferrari: '#f70404',      
  mercedes: '#6A7E8E',       
  mclaren: '#FF6400',    
  textoClaro: '#FFFFFF',
  textoEscuro: '#111827',
};