# 🚀 AppCurrículo - Atividade de Aula (11/11/2025)

Projeto de um aplicativo de Currículo (CV) desenvolvido como atividade para a disciplina de [Nome da Disciplina]. O aplicativo foi construído utilizando **React Native**, **Expo** e **TypeScript**, seguindo todos os requisitos solicitados.

  * **Aluno:** Isaias Levi Tavares da Silva
  * **Curso:** Sistemas de Informação
  * **Matéria:** [Nome da Matéria]
  * **Professor:** [Nome do Professor]

-----

## 🛠️ Tecnologias Utilizadas

Este projeto foi inicializado com o template "Blank (TypeScript)" do Expo para garantir o máximo controle sobre a estrutura e o código.

  * **React Native:** Framework principal para desenvolvimento móvel.
  * **Expo:** Plataforma e conjunto de ferramentas para facilitar o desenvolvimento e build.
  * **TypeScript:** Superset do JavaScript utilizado para adicionar tipagem estática e robustez ao código.
  * **`react-native-safe-area-context`:** Biblioteca para lidar corretamente com as áreas seguras da tela (notches, barras de status) em iOS e Android.
  * **`@expo/vector-icons`:** Biblioteca de ícones utilizada para melhorar a interface do usuário (UX) em todas as seções do aplicativo.

-----

## ✅ Funcionalidades Implementadas (Requisitos)

Todos os requisitos da atividade foram implementados:

  * **[✅] Cabeçalho:** Apresenta a foto do candidato, nome completo e título profissional.
  * **[✅] Seção "Sobre":** Contém um resumo/objetivo profissional.
  * **[✅] Experiências Profissionais:** Lista de experiências (empresa, cargo, período) onde **cada item é clicável**, exibindo um `Alert` com a descrição detalhada.
  * **[✅] Formação Acadêmica:** Lista de formações (instituição, curso, ano/conclusão).
  * **[✅] Seção de Habilidades:** Exibe *hard skills* e *soft skills* com indicadores visuais de proficiência (barras) através de um componente customizado (`SkillBar.tsx`).
  * **[✅] Seção de Contatos:** Lista de contatos (E-mail, WhatsApp, LinkedIn, GitHub, Site Pessoal) que utilizam a API `Linking` para **abrir os aplicativos correspondentes** (cliente de e-mail, navegador, etc.).

### ✨ Recursos Adicionais

Para ir além do básico solicitado, foram implementados:

  * **Interface Moderna:** O app utiliza uma paleta de cores *Dark Mode* com tons de neon (Ciano e Roxo) para uma estética mais atraente.
  * **Uso de Ícones:** Todas as seções e itens de contato são acompanhados por ícones, melhorando a identificação visual.
  * **Componentização Limpa:** O projeto foi 100% componentizado, dividindo cada seção (`About`, `Experience`, `Skills`, etc.) em seu próprio arquivo `.tsx` dentro da pasta `src/components`.
  * **Correção de `VirtualizedLists`:** O erro comum de aninhar `FlatList` dentro de `ScrollView` foi evitado. As listas curtas (Experiência e Educação) foram renderizadas com `.map()` para manter a performance da rolagem principal.

-----

## 🏃 Como Executar o Projeto

1.  **Pré-requisitos:**

      * Node.js (LTS)
      * `npm` ou `yarn`
      * App **Expo Go** instalado no seu celular (Android ou iOS)

2.  **Clonar o Repositório:**

    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd AppCurriculo
    ```

3.  **Instalar as Dependências:**

    ```bash
    npm install
    ```

    *(ou `yarn install`)*

4.  **Iniciar o Servidor Expo:**

    ```bash
    npx expo start
    ```

5.  **Abrir o Aplicativo:**
    Após o servidor iniciar, escaneie o QR code exibido no terminal com o aplicativo Expo Go.

-----

## 📁 Estrutura de Pastas

A estrutura do projeto foi organizada da seguinte forma:

```
AppCurriculo/
├── src/
│   ├── assets/       # Imagens estáticas (foto de perfil, ícones do app)
│   └── components/   # Componentes React reutilizáveis (seções)
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── Education.tsx
│       ├── Experience.tsx
│       ├── Header.tsx
│       ├── SkillBar.tsx
│       └── Skills.tsx
├── App.tsx           # Arquivo raiz, ponto de entrada principal do app
├── app.json        # Configurações do Expo (ícone, splash screen, etc.)
├── tsconfig.json     # Configurações do TypeScript
└── package.json      # Dependências do projeto
```

-----