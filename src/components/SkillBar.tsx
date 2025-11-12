import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  skill: string;
  level: number;
};

const SkillBar = ({ skill, level }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.skillName}>{skill}</Text>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${level}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  skillName: {
    fontSize: 16,
    marginBottom: 4,
    color: '#F0F8FF', // Texto quase branco
  },
  barBackground: {
    height: 12,
    width: '100%',
    backgroundColor: '#33334F', // Fundo da barra um pouco mais claro que o fundo geral
    borderRadius: 6,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#00FFFF', // Ciano neon
    borderRadius: 6,
  },
});

export default SkillBar;