import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
      <View style={styles.sectionHeader}>
        <MaterialCommunityIcons name="school" size={24} color="#00FFFF" style={styles.headerIcon} />
        <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
      </View>
      
      <View>
        {education.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.curso}</Text>
            <Text style={styles.itemSubtitle}>{item.instituicao}</Text>
            <Text style={styles.itemPeriod}>{item.conclusao}</Text>
          </View>
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
    backgroundColor: '#1A1A32',
    padding: 18,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9400D3',
    shadowColor: '#00FFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00FFFF',
  },
  itemSubtitle: {
    fontSize: 15,
    color: '#F0F8FF',
    marginTop: 4,
  },
  itemPeriod: {
    fontSize: 14,
    color: '#A9A9A9', // Cinza escuro
    marginTop: 2,
    fontStyle: 'italic',
  }
});

export default Education;