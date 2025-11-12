import React from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import { 
  SafeAreaProvider, 
  SafeAreaView 
} from 'react-native-safe-area-context';

import About from './src/components/About';
import Contact from './src/components/Contact';
import Education from './src/components/Education';
import Experience from './src/components/Experience';
import Header from './src/components/Header';
import Skills from './src/components/Skills'; // SkillBar é importado dentro de Skills

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        {/* Status bar com conteúdo claro para o fundo escuro */}
        <StatusBar barStyle="light-content" backgroundColor="#0C0C1E" /> 
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            
            <Header />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Contact />

          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0C0C1E', // Fundo principal escuro
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});