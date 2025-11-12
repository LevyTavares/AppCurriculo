import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Sobre Mim</Text>
      <Text style={styles.aboutText}>
        Sou um estudante de Sistemas de Informação apaixonado por criar 
        soluções de tecnologia. Com foco em desenvolvimento mobile 
        com React Native e backend com Node.js e Python, busco 
        oportunidades para aplicar e expandir meus conhecimentos.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 15, // Espaço entre as seções
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24, // Melhora a legibilidade
    color: '#555',
  },
});

// A linha mágica que corrige o erro!
export default About;