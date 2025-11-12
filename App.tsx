import React from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
// 1. Importações corretas
import { 
  SafeAreaProvider, 
  SafeAreaView 
} from 'react-native-safe-area-context';

// Importe seus componentes (CAMINHOS CORRIGIDOS)
import About from './src/components/About';
import Contact from './src/components/Contact';
import Education from './src/components/Education';
import Experience from './src/components/Experience'; // Corrigido de "Expecience"
import Header from './src/components/Header';
import SkillBar from './src/components/SkillBar';
import Skills from './src/components/Skills';


export default function App() {
  return (
    // 2. Envolva tudo no Provider
    <SafeAreaProvider>
      {/* 3. Use o SafeAreaView da nova lib */}
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            
            <Header />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Contact />
            {/* ... (coloquei o resto dos componentes para você) */}

          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5ff', // Mudei levemente a cor de fundo
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});