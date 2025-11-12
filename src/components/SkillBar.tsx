import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 1. Tipos para as propriedades (props) do nosso componente
type Props = {
  skill: string;  // Nome da habilidade
  level: number;  // Nível de 0 a 100
};

// 2. O componente em si
const SkillBar = ({ skill, level }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.skillName}>{skill}</Text>
      
      {/* 3. A "barra de fundo" cinza */}
      <View style={styles.barBackground}>
        
        {/* 4. A "barra de preenchimento" azul, que cresce com o 'level' */}
        <View style={[styles.barFill, { width: `${level}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12, // Espaço entre as barras
  },
  skillName: {
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
  },
  barBackground: {
    height: 12,
    width: '100%',
    backgroundColor: '#e0e0e0', // Fundo cinza claro
    borderRadius: 6,
    overflow: 'hidden', // Para que a barra de preenchimento não saia das bordas
  },
  barFill: {
    height: '100%',
    backgroundColor: '#007bff', // Preenchimento azul
    borderRadius: 6,
  },
});

// 5. Exportação (isso corrige o erro de import do SkillBar)
export default SkillBar;