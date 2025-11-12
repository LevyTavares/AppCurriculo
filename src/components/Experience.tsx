import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Alert 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const experiences = [
  {
    id: '1',
    empresa: 'Empresa Fictícia',
    cargo: 'Estagiário de Desenvolvimento',
    periodo: '2024 - Atualmente',
    descricao: 'Desenvolvimento de componentes em React Native e manutenção de APIs em Node.js para clientes internos.'
  },
  {
    id: '2',
    empresa: 'Projeto Freelance',
    cargo: 'Desenvolvedor Full-Stack Jr.',
    periodo: '2023 - 2024',
    descricao: 'Criação de um e-commerce completo utilizando React, TypeScript e Firebase.'
  },
];

type ExperienceItemProps = typeof experiences[0];

const Experience = () => {

  const showDetails = (item: ExperienceItemProps) => {
    Alert.alert(
      item.cargo,
      `Empresa: ${item.empresa}\nPeríodo: ${item.periodo}\n\nDescrição: ${item.descricao}`,
      [{ text: "OK", style: "cancel" }] // Adiciona um botão OK
    );
  };

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <MaterialCommunityIcons name="briefcase" size={24} color="#00FFFF" style={styles.headerIcon} />
        <Text style={styles.sectionTitle}>Experiência Profissional</Text>
      </View>
      
      <View>
        {experiences.map((item) => (
          <TouchableOpacity 
            key={item.id}
            style={styles.itemContainer}
            onPress={() => showDetails(item)}
          >
            <Text style={styles.itemTitle}>{item.cargo}</Text>
            <Text style={styles.itemSubtitle}>{item.empresa} ({item.periodo})</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 15,
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00FFFF',
  },
  itemContainer: {
    backgroundColor: '#1A1A32', // Fundo escuro para os itens
    padding: 18,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9400D3', // Borda roxa neon
    shadowColor: '#00FFFF', // Sombra sutil
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  itemTitle: {
    fontSize: 18, // Aumenta o título
    fontWeight: 'bold',
    color: '#00FFFF', // Ciano neon
  },
  itemSubtitle: {
    fontSize: 15,
    color: '#F0F8FF', // Texto quase branco
    marginTop: 4,
  }
});

export default Experience;