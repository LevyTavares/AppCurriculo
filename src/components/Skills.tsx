import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SkillBar from './SkillBar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Skills = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <MaterialCommunityIcons name="tools" size={24} color="#00FFFF" style={styles.headerIcon} />
        <Text style={styles.sectionTitle}>Habilidades</Text>
      </View>

      <View style={styles.subTitleContainer}>
        <MaterialCommunityIcons name="code-tags" size={20} color="#9400D3" style={styles.subHeaderIcon} />
        <Text style={styles.subTitle}>Hard Skills</Text>
      </View>
      <SkillBar skill="React Native" level={75} />
      <SkillBar skill="TypeScript" level={80} />
      <SkillBar skill="Node.js" level={60} />
      <SkillBar skill="Python" level={70} />

      <View style={styles.subTitleContainer}>
        <MaterialCommunityIcons name="brain" size={20} color="#9400D3" style={styles.subHeaderIcon} />
        <Text style={styles.subTitle}>Soft Skills</Text>
      </View>
      <SkillBar skill="Comunicação" level={85} />
      <SkillBar skill="Trabalho em Equipe" level={90} />
      <SkillBar skill="Resolução de Problemas" level={80} />
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
  subTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 8,
  },
  subHeaderIcon: {
    marginRight: 8,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#9400D3', // Roxo neon
  },
});

export default Skills;