# Aplicativo Scanner de Dispositivos Bluetooth

## Visão Geral

O Aplicativo Scanner de Dispositivos Bluetooth é uma aplicação React Native projetada para escanear e exibir dispositivos Bluetooth nas proximidades. Esta aplicação utiliza a biblioteca `react-native-ble-plx` para gerenciar operações de Bluetooth Low Energy (BLE), fornecendo uma interface amigável para iniciar a varredura de dispositivos, exibir a lista de dispositivos descobertos e gerenciar permissões de Bluetooth.

## Funcionalidades

- **Escanear por Dispositivos Bluetooth**: Os usuários podem iniciar uma varredura para descobrir dispositivos Bluetooth próximos. O aplicativo exibe uma lista dos dispositivos encontrados, incluindo seus nomes ou um texto de substituição para dispositivos sem nome.
- **Gerenciamento de Permissões**: O aplicativo solicita as permissões de Bluetooth necessárias do usuário para garantir que possa operar corretamente em diversos dispositivos.
- **UI Responsiva**: Implementa uma interface de usuário limpa e responsiva, tornando-a fácil de usar e entender. Inclui botões para iniciar a varredura e solicitar permissões, junto com uma lista para exibir os dispositivos.
- **Gerenciamento de Dispositivos**: Através do aplicativo, os usuários podem ver quantos dispositivos foram encontrados e obter informações específicas sobre cada dispositivo, como seu nome e ID.

## Detalhes Técnicos

- **Gerenciamento de Estado**: A aplicação utiliza os hooks `useReducer` e `useCallback` do React para o gerenciamento de estado, garantindo atualizações e re-renderizações eficientes.
- **Componentes Personalizados**: Possui componentes de botão personalizados (`Button` e `ButtonCard`) para interações, melhorando a UI e UX.
- **API de Permissões**: Utiliza um módulo de `permissions` personalizado para solicitar e verificar permissões de Bluetooth, essencial para acessar funcionalidades de Bluetooth.
- **Integração com API Bluetooth**: A classe `Bluetooth`, um singleton, encapsula todas as operações de Bluetooth, incluindo a varredura de dispositivos, a interrupção da varredura e a verificação do status de conexão do dispositivo.

## Como Funciona

1. **Iniciando o Aplicativo**: Ao ser lançado, o aplicativo automaticamente solicita permissões de Bluetooth do usuário.
2. **Varredura de Dispositivos**: O usuário pode iniciar uma varredura pressionando o botão "Procurar Dispositivos". O aplicativo então exibe os dispositivos descobertos em tempo real.
3. **Listagem de Dispositivos**: Dispositivos descobertos são listados com seus nomes. Se um dispositivo não possui nome, mostra "Nome Desconhecido".
4. **Gerenciamento de Permissões**: Usuários podem solicitar manualmente as permissões novamente se necessário pressionando o botão "Solicitar Permissão".

## Configuração

Para executar este aplicativo:

1. Certifique-se de ter o ambiente React Native configurado.
2. Clone o repositório e navegue até o diretório do projeto.
3. Execute `npm install` para instalar as dependências.
4. Crie uma build de desenvolvimento usando os comandos do Expo:
   - Primeiro, limpe o ambiente de prebuild com `npx expo prebuild --clean`.
   - Em seguida, execute `npx expo run:android --no-build-cache` (ou `npx expo run:ios` para dispositivos iOS) para iniciar a aplicação no dispositivo ou emulador.

## Dependências

- `react-native-ble-plx`: Para operações com Bluetooth LE.
- `react-native-safe-area-context` e `@expo-google-fonts/roboto-slab`: Para estilização da UI e fontes.
- `expo-status-bar`: Para gerenciar a aparência da barra de status.

Este aplicativo demonstra o uso eficiente de recursos modernos do React Native e bibliotecas para criar um scanner de dispositivos Bluetooth funcional e amigável ao usuário.
