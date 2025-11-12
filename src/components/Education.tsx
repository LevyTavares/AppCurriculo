import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // FlatList removido

// 1. Dados de exemplo
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

const Education = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
      
      {/* 2. ADEUS FLATLIST: Usando .map() no lugar */}
      <View>
        {education.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.curso}</Text>
            <Text style={styles.itemSubtitle}>{item.instituicao}</Text>
            <Text style={styles.itemPeriod}>{item.conclusao}</Text>
          </View>
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

export default Education;