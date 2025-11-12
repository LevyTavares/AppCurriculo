import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importa um conjunto de ícones

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require('../assets/profile-pic.png')} 
      />

      <Text style={styles.name}>Isaias Levi Tavares da Silva</Text>

      <View style={styles.titleContainer}>
        <MaterialCommunityIcons name="react" size={20} color="#00FFFF" style={styles.icon} /> 
        <Text style={styles.title}>Desenvolvedor Mobile | React Native</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30, // Aumenta o espaço para destacar mais
    paddingTop: 20, // Espaço no topo
  },
  profileImage: {
    width: 160, // Aumenta um pouco
    height: 160,
    borderRadius: 80,
    borderWidth: 4, // Borda um pouco mais grossa
    borderColor: '#00FFFF', // Borda ciano neon
    marginBottom: 15,
  },
  name: {
    fontSize: 28, // Aumenta um pouco
    fontWeight: 'bold',
    color: '#F0F8FF', // Texto quase branco
    marginBottom: 5,
  },
  titleContainer: {
    flexDirection: 'row', // Para alinhar ícone e texto
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 19, // Aumenta um pouco
    color: '#9400D3', // Roxo neon para o título
    fontStyle: 'italic', // Para dar um toque diferenciado
  },
});

export default Header;