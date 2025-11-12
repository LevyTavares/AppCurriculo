import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Alert 
} from 'react-native';

// 1. Dados de exemplo
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

type ExperienceItemProps = typeof experiences[0]; // TypeScript mais simples

const Experience = () => {

  const showDetails = (item: ExperienceItemProps) => {
    Alert.alert(
      item.cargo,
      `Empresa: ${item.empresa}\nPeríodo: ${item.periodo}\n\nDescrição: ${item.descricao}`
    );
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Experiência Profissional</Text>
      
      {/* 2. ADEUS FLATLIST: Usando .map() no lugar */}
      <View>
        {experiences.map((item) => (
          <TouchableOpacity 
            key={item.id} // A 'key' agora vai aqui
            style={styles.itemContainer}
            onPress={() => showDetails(item)}
          >
            <Text style={styles.itemTitle}>{item.cargo}</Text>
            <Text style={styles.itemSubtitle}>{item.empresa} ({item.periodo})</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* FIM DA MUDANÇA */}

    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff'
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  }
});

export default Experience;