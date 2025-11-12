import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';

// 1. Função helper para abrir links
// É uma boa prática ter um 'try...catch' para o Linking
const openLink = async (url: string) => {
  try {
    // Verifica se o link pode ser aberto
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Não é possível abrir este URL: ${url}`);
    }
  } catch (error) {
    console.error('Erro ao abrir o link: ', error);
    Alert.alert('Ocorreu um erro');
  }
};


// 2. Componente de item de contato (reutilizável)
// Vamos criar um sub-componente para não repetir código
type ContactItemProps = {
  label: string;
  value: string;
  url: string;
};

const ContactItem = ({ label, value, url }: ContactItemProps) => (
  <TouchableOpacity 
    style={styles.itemContainer}
    onPress={() => openLink(url)}
  >
    <Text style={styles.itemLabel}>{label}</Text>
    <Text style={styles.itemValue}>{value}</Text>
  </TouchableOpacity>
);


// 3. O componente principal da seção
const Contact = () => {
  // Substitua pelos seus dados
  const myEmail = 'seu.email@exemplo.com';
  const myPhone = '5588999998888'; // Formato internacional sem '+'
  const myLinkedIn = 'seu-usuario-linkedin';
  const myGitHub = 'seu-usuario-github';
  const mySite = 'seusite.com';

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Contato</Text>

      <ContactItem 
        label="E-mail"
        value={myEmail}
        url={`mailto:${myEmail}`} // Link de e-mail
      />

      <ContactItem 
        label="WhatsApp"
        value="+55 (88) 99999-8888"
        url={`whatsapp://send?phone=${myPhone}`} // Link de WhatsApp
      />

      <ContactItem 
        label="LinkedIn"
        value={`linkedin.com/in/${myLinkedIn}`}
        url={`https://www.linkedin.com/in/${myLinkedIn}`} // Link web
      />
      
      <ContactItem 
        label="GitHub"
        value={`github.com/${myGitHub}`}
        url={`https://github.com/${myGitHub}`} // Link web
      />

      <ContactItem 
        label="Site Pessoal"
        value={mySite}
        url={`https://${mySite}`} // Link web
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
  itemLabel: {
    fontSize: 12,
    color: '#888',
    textTransform: 'uppercase',
  },
  itemValue: {
    fontSize: 16,
    color: '#007bff', // Azul para indicar que é um link
    marginTop: 2,
  }
});

// 4. Exportação (remove o último erro da lista!)
export default Contact;