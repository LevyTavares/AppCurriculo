import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* 1. Foto do Candidato */}
      <Image
        style={styles.profileImage}
        // Use 'require' para imagens locais
        // Este caminho está correto: ../ sobe de 'components' para 'src'
        source={require('../assets/profile-pic.png')} 
      />

      {/* 2. Nome Completo */}
      <Text style={styles.name}>Levy (Seu Nome Completo)</Text>

      {/* 3. Título Profissional */}
      <Text style={styles.title}>Desenvolvedor Mobile | React Native</Text>
    </View>
  );
};

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Centraliza tudo no container
    marginBottom: 20,     // Espaço abaixo do cabeçalho
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Metade da largura/altura para fazer um círculo
    borderWidth: 3,
    borderColor: '#007bff', // Uma cor de borda
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 18,
    color: '#666',
  },
});

export default Header;