import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity,
  Alert 
} from 'react-native';

// 1. Dados de exemplo (substitua pelos seus)
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

// 2. Tipo para os nossos dados (bom para TypeScript)
type ExperienceItemProps = {
  id: string;
  empresa: string;
  cargo: string;
  periodo: string;
  descricao: string;
};

const Experience = () => {

  // 3. Função que mostra o Alerta com os detalhes
  const showDetails = (item: ExperienceItemProps) => {
    Alert.alert(
      item.cargo, // Título do Alerta
      `Empresa: ${item.empresa}\nPeríodo: ${item.periodo}\n\nDescrição: ${item.descricao}` // Mensagem
    );
  };

  // 4. Função que renderiza cada item da lista
  const renderItem = ({ item }: { item: ExperienceItemProps }) => (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => showDetails(item)} // Ação de clique
    >
      <Text style={styles.itemTitle}>{item.cargo}</Text>
      <Text style={styles.itemSubtitle}>{item.empresa} ({item.periodo})</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Experiência Profissional</Text>
      <FlatList
        data={experiences}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    color: '#007bff' // Azul para indicar que é clicável
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  }
});

// 5. Exportação para corrigir o erro no App.tsx
export default Experience;