import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const About = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <MaterialCommunityIcons name="information" size={24} color="#00FFFF" style={styles.headerIcon} />
        <Text style={styles.sectionTitle}>Sobre Mim</Text>
      </View>
      <Text style={styles.aboutText}>
        Sou um estudante de Sistemas de Informação apaixonado por criar 
        soluções de tecnologia. Com foco em desenvolvimento Front-end web e mobile 
        com React e React Native, busco 
        oportunidades para aplicar e expandir meus conhecimentos.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 15,
    backgroundColor: '#0C0C1E', // Fundo escuro para a seção
    padding: 18, // Aumenta o padding
    borderRadius: 10, // Arredonda mais as bordas
    borderWidth: 1,
    borderColor: '#9400D3', // Borda roxa neon
    shadowColor: '#00FFFF', // Sombra neon
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8, // Sombra para Android
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerIcon: {
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 22, // Aumenta um pouco
    fontWeight: 'bold',
    color: '#00FFFF', // Ciano neon
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#F0F8FF', // Texto quase branco
  },
});

export default About; 