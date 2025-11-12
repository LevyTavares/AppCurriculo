import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 1. Importe o componente que acabamos de criar
import SkillBar from './SkillBar';

const Skills = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Habilidades</Text>

      {/* 2. Subtítulo para Hard Skills */}
      <Text style={styles.subTitle}>Hard Skills</Text>
      <SkillBar skill="React Native" level={75} />
      <SkillBar skill="TypeScript" level={80} />
      <SkillBar skill="Node.js" level={60} />
      <SkillBar skill="Python" level={70} />

      {/* 3. Subtítulo para Soft Skills (você pode usar SkillBar ou uma lista simples) */}
      <Text style={styles.subTitle}>Soft Skills</Text>
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600', // Um pouco menos forte que o título
    marginTop: 10,
    marginBottom: 8,
    color: '#444',
  },
});

// 4. Exportação (corrige o erro de import do Skills)
export default Skills;