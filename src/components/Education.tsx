import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// 1. Dados de exemplo (substitua pelos seus)
const education = [
  {
    id: '1',
    instituicao: 'Uninassau',
    curso: 'Sistemas de Informação',
    conclusao: 'Previsão: 2026',
  },
  {
    id: '2',
    instituicao: 'Escola de Ensino Médio',
    curso: 'Ensino Médio',
    conclusao: 'Concluído em: 2022',
  },
];

// 2. Tipo para os nossos dados
type EducationItemProps = {
  id: string;
  instituicao: string;
  curso: string;
  conclusao: string;
};

const Education = () => {

  // 3. Função que renderiza cada item da lista
  const renderItem = ({ item }: { item: EducationItemProps }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.curso}</Text>
      <Text style={styles.itemSubtitle}>{item.instituicao}</Text>
      <Text style={styles.itemPeriod}>{item.conclusao}</Text>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
      <FlatList
        data={education}
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
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  itemPeriod: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
    fontStyle: 'italic',
  }
});

// 4. Exportação para corrigir o erro
export default Education;