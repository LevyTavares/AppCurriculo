import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Feather } from '@expo/vector-icons'; // Importa vários conjuntos de ícones


const openLink = async (url: string) => {
  try {
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

type ContactItemProps = {
  label: string;
  value: string;
  url: string;
  iconName: string; // Adicionamos uma prop para o nome do ícone
  iconSet: 'MaterialCommunityIcons' | 'FontAwesome5' | 'Feather'; // Qual conjunto de ícones usar
};

const ContactItem = ({ label, value, url, iconName, iconSet }: ContactItemProps) => {
  const IconComponent = 
    iconSet === 'MaterialCommunityIcons' ? MaterialCommunityIcons :
    iconSet === 'FontAwesome5' ? FontAwesome5 :
    Feather; // Default para Feather, caso não seja um dos outros

  return (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => openLink(url)}
    >
      <IconComponent name={iconName} size={20} color="#00FFFF" style={styles.itemIcon} />
      <View>
        <Text style={styles.itemLabel}>{label}</Text>
        <Text style={styles.itemValue}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Contact = () => {
  const myEmail = 'seu.email@exemplo.com';
  const myPhone = '5588999998888'; 
  const myLinkedIn = 'seu-usuario-linkedin';
  const myGitHub = 'seu-usuario-github';
  const mySite = 'seusite.com';

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <MaterialCommunityIcons name="phone" size={24} color="#00FFFF" style={styles.headerIcon} />
        <Text style={styles.sectionTitle}>Contato</Text>
      </View>

      <ContactItem 
        label="E-mail"
        value={myEmail}
        url={`mailto:${myEmail}`}
        iconName="email-outline"
        iconSet="MaterialCommunityIcons"
      />

      <ContactItem 
        label="WhatsApp"
        value="+55 (88) 99999-8888"
        url={`whatsapp://send?phone=${myPhone}`}
        iconName="whatsapp"
        iconSet="MaterialCommunityIcons"
      />

      <ContactItem 
        label="LinkedIn"
        value={`linkedin.com/in/${myLinkedIn}`}
        url={`https://www.linkedin.com/in/${myLinkedIn}`}
        iconName="linkedin"
        iconSet="MaterialCommunityIcons"
      />
      
      <ContactItem 
        label="GitHub"
        value={`github.com/${myGitHub}`}
        url={`https://github.com/${myGitHub}`}
        iconName="github"
        iconSet="Feather" // Ícone do GitHub do conjunto Feather
      />

      <ContactItem 
        label="Site Pessoal"
        value={mySite}
        url={`https://${mySite}`}
        iconName="web"
        iconSet="MaterialCommunityIcons"
      />
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
    flexDirection: 'row', // Para alinhar ícone e texto
    alignItems: 'center',
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
  itemIcon: {
    marginRight: 15, // Espaço entre o ícone e o texto
  },
  itemLabel: {
    fontSize: 12,
    color: '#A9A9A9',
    textTransform: 'uppercase',
  },
  itemValue: {
    fontSize: 16,
    color: '#F0F8FF', // Cor principal do texto para links
    marginTop: 2,
    textDecorationLine: 'underline', // Destaca que é um link
  }
});

export default Contact;