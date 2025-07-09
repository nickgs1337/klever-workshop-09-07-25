---
theme: default
title: 'Workshop Web3 - Klever'
titleTemplate: '%s - Descobrindo o Futuro da Web'
author: 'Klever Team'
keywords: 'web3,blockchain,klever,smart contracts,rust,kvm'
presenter: true
drawings:
  enabled: true
  persist: false
transition: slide-left
highlighter: shiki
lineNumbers: true
colorSchema: 'dark'
css: unocss
themeConfig:
  primary: '#AA33B5'
---

<style>
.slidev-layout.cover {
  background: linear-gradient(135deg, #0B0E27 0%, #1A1D3A 40%, #0F1629 100%) !important;
}

.slidev-layout.cover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background-image: 
    radial-gradient(circle at 25% 25%, #AA33B5 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, #32CD32 2px, transparent 2px);
  background-size: 60px 60px;
  z-index: 0;
}

.cover-content {
  position: relative;
  z-index: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  margin-top: -10vh;
}
</style>

<div class="cover-content">
  
  
  <!-- Klever branding -->
  <div class="mb-6">
    <h1 style="
      font-family: 'Montserrat', sans-serif;
      font-size: 4rem;
      font-weight: 800;
      background: linear-gradient(135deg, #AA33B5 0%, #8A2BE2 50%, #32CD32 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    ">KLEVER</h1>
    
  <div style="
    font-family: 'Open Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    color: #32CD32;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  ">BLOCKCHAIN WORKSHOP</div>
  </div>
  
  <!-- Main title -->
  <div class="mb-8">
    <h2 style="
      font-family: 'Lato', sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 1rem;
    ">Workshop Web3</h2>
    
  <p style="
    font-family: 'Open Sans', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    color: #B8BCC8;
  ">Descobrindo o Mundo da Web Descentralizada</p>
  </div>
  
  <!-- Duration badges -->
  <div class="flex justify-center items-center gap-6 mb-8">
    <div style="
      background: linear-gradient(135deg, #1A1D3A 0%, #AA33B5 100%);
      border: 2px solid #AA33B5;
      padding: 0.75rem 2rem;
      border-radius: 2rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      color: #FFFFFF;
    ">3 DIAS</div>
    
  <div style="color: #32CD32; font-size: 1.5rem;">●</div>
  
  <div style="
    background: linear-gradient(135deg, #1A1D3A 0%, #8A2BE2 100%);
    border: 2px solid #8A2BE2;
    padding: 0.75rem 2rem;
    border-radius: 2rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #FFFFFF;
  ">12 HORAS</div>
  </div>
  
  <!-- Blockchain tech indicators -->
  <div class="flex justify-center items-center gap-8 mb-8">
    <div class="flex items-center gap-2">
      <div style="color: #AA33B5; font-size: 1.2rem;">🔗</div>
      <span style="
        font-family: 'Open Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 600;
        color: #AA33B5;
      ">KleverChain</span>
    </div>
  
  <div class="flex items-center gap-2">
    <div style="color: #32CD32; font-size: 1.2rem;">📝</div>
    <span style="
      font-family: 'Open Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      color: #32CD32;
    ">Smart Contracts</span>
  </div>
  
  <div class="flex items-center gap-2">
    <div style="color: #AA33B5; font-size: 1.2rem;">⚡</div>
    <span style="
      font-family: 'Open Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      color: #AA33B5;
    ">KVM</span>
  </div>
  </div>
  
  <!-- Tagline -->
  <div style="
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #B8BCC8;
    border-top: 1px solid rgba(170, 51, 181, 0.3);
    padding-top: 1.5rem;
    margin-top: 2rem;
  ">
    Uma jornada completa do conceito à implementação
  </div>
    
</div>

---
layout: cover
class: text-center
---

# Bem-vindos ao Futuro!

<div class="text-xl mb-8">
  <v-click>👋 Apresentações</v-click>
  <v-click>🚀 Klever</v-click>
  <v-click>🌐 Web3</v-click>
  <v-click>⚡ Blockchain</v-click>
</div>

---
layout: center
---

# 🤝 Vamos nos Conhecer!

<div class="space-y-6 mt-8">
  <div class="text-lg">
  <v-click>
  
  ## 💭 Pergunta Interativa #1
  **"O que você já sabe sobre blockchain?"**
  
  <div class="text-sm text-gray-600 mt-2">
    *Compartilhe em uma palavra ou frase curta*
  </div>
  
  </v-click>
  </div>
  
  <div class="text-lg">
  <v-click>
  
  ## 🎯 Pergunta Interativa #2
  **"O que você espera aprender neste workshop?"**
  
  <div class="text-sm text-gray-600 mt-2">
    *Suas expectativas nos ajudam a personalizar a experiência*
  </div>
  
  </v-click>
  </div>
</div>

<div class="text-center mt-8">
  <v-click>
  
  <div class="text-lg font-bold klever-gradient-text">
    🚀 Vamos construir o futuro juntos!
  </div>
  
  </v-click>
</div>

---
layout: default
---

# A Klever

<div class="flex justify-between gap-12 mt-8">

<div class="flex-1">

<v-click>

## 🏢 Quem Somos
- Empresa brasileira
- Ecossistema Web3 completo  
- Foco em simplicidade

</v-click>

</div>

<div class="flex-1">

<v-click>

## 🔗 Blockchain Klever
- Alta performance
- Baixas taxas
- Smart contracts

</v-click>

</div>

</div>

<v-click>

<div class="text-center mt-12">
  <div class="text-2xl font-bold klever-gradient-text">
    🎯 Democratizar o acesso à tecnologia blockchain
  </div>
</div>

</v-click>

---
layout: center
---

# <GradientText>Agenda dos 3 Dias</GradientText>

<div class="grid grid-cols-3 gap-8 mt-8">
  <KleverCard 
    icon="🎓" 
    title="Dia 1" 
    description="Fundamentos - Conceitos e Mercado"
  />
  
  <KleverCard 
    icon="⚙️" 
    title="Dia 2" 
    description="Desenvolvimento - Rust & Smart Contracts"
  />
  
  <KleverCard 
    icon="🏆" 
    title="Dia 3" 
    description="Competição - Hackathon & Premiação"
  />
</div>

---
layout: center
---

# Objetivos do Workshop

<div class="text-left text-lg space-y-4">

<v-click>

✨ **Desmistificar** o mundo Web3/Blockchain

</v-click>

<v-click>

🎯 **Demonstrar** as vantagens e oportunidades

</v-click>

<v-click>

🛠️ **Ensinar** desenvolvimento prático

</v-click>

<v-click>

🚀 **Inspirar** a criação de soluções inovadoras

</v-click>

<v-click>

🤝 **Promover** colaboração e networking

</v-click>

</div>

---
layout: section
---

# <GradientText>Dia 1: Fundamentos</GradientText>
Descobrindo o Mundo Web3

---
layout: center
---

# Por que Web3 é o Futuro?

<div class="grid grid-cols-2 gap-8 mt-8">
  <div>
    <h3 class="text-xl font-bold mb-4 text-red-600">🚫 Web2 (Atual)</h3>
    <ul class="space-y-2 text-sm">
      <li>• Dados centralizados</li>
      <li>• Controle por big techs</li>
      <li>• Intermediários necessários</li>
      <li>• Censura possível</li>
      <li>• Vendor lock-in</li>
    </ul>
  </div>
  
  <div>
    <h3 class="text-xl font-bold mb-4 text-green-600">✅ Web3 (Futuro)</h3>
    <ul class="space-y-2 text-sm">
      <li>• Dados descentralizados</li>
      <li>• Controle do usuário</li>
      <li>• Transações diretas</li>
      <li>• Resistente à censura</li>
      <li>• Interoperabilidade</li>
    </ul>
  </div>
</div>

---
layout: default
---

# O que é Blockchain?

<div class="text-center mb-8">

<v-click>

## 📚 Um livro-razão digital descentralizado e imutável

</v-click>

</div>

<div class="flex justify-between gap-8 mt-8">

<div class="flex-1">

<v-click>

## 🔗 Como Funciona
- Blocos conectados por hash
- Rede distribuída de nós
- Consenso matemático
- Transparência total

</v-click>

</div>

<div class="flex-1">

<v-click>

## 🌟 Vantagens
- **Segurança**: Criptografia avançada
- **Transparência**: Transações visíveis
- **Descentralização**: Sem ponto único de falha

</v-click>

</div>

</div>

---
layout: center
---

# Anatomia de um Bloco

<div class="grid grid-cols-1 gap-4 mt-8">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-blue-800">🔢 Header (Cabeçalho)</div>
    <div class="text-sm text-gray-600">Hash do bloco anterior • Timestamp • Nonce</div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-green-800">📊 Dados (Transações)</div>
    <div class="text-sm text-gray-600">Lista de todas as transações do bloco</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-purple-800">🔐 Hash</div>
    <div class="text-sm text-gray-600">Impressão digital única do bloco</div>
  </div>
</div>

---
layout: center
---

# Ciclo de Vida de uma Transação

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="space-y-4">
    <div class="flex items-center space-x-2">
      <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
      <div>Usuário inicia transação</div>
    </div>
    <div class="flex items-center space-x-2">
      <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
      <div>Assinatura digital</div>
    </div>
    <div class="flex items-center space-x-2">
      <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
      <div>Broadcast para rede</div>
    </div>
    <div class="flex items-center space-x-2">
      <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
      <div>Validação pelos nós</div>
    </div>
  </div>
  <div class="space-y-4">
    <div class="flex items-center space-x-2">
      <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">5</div>
      <div>Consenso da rede</div>
    </div>
    <div class="flex items-center space-x-2">
      <div class="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">6</div>
      <div>Inclusão no bloco</div>
    </div>
    <div class="flex items-center space-x-2">
      <div class="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">7</div>
      <div>Adição à blockchain</div>
    </div>
    <div class="flex items-center space-x-2">
      <div class="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">8</div>
      <div>Confirmação final</div>
    </div>
  </div>
</div>

---
layout: center
---

# Carteiras e Chaves

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-blue-800 mb-2">🔐 Chave Privada</div>
    <div class="text-sm text-gray-600">
      • Secreta e única<br/>
      • Assina transações<br/>
      • NUNCA compartilhe<br/>
      • Controla os fundos
    </div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-green-800 mb-2">🔑 Chave Pública</div>
    <div class="text-sm text-gray-600">
      • Derivada da privada<br/>
      • Gera o endereço<br/>
      • Pode ser compartilhada<br/>
      • Recebe fundos
    </div>
  </div>
</div>

<div class="text-center mt-6">
  <div class="text-xl font-bold text-red-600">
    🚨 Sua chave privada = Sua responsabilidade
  </div>
</div>

---
layout: center
---

# 🔍 Desmistificando a Blockchain

<div class="text-center mb-6">
  <div class="text-lg font-bold text-purple-600">Mitos vs. Verdades</div>
</div>

<div class="mx-8 space-y-4">
  <div class="bg-gray-50 p-4 rounded-lg">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <div class="text-base font-bold text-red-800">❌ "Só para criminosos"</div>
      </div>
      <div>
        <div class="text-base font-bold text-green-800">✅ Transparente e auditável</div>
      </div>
    </div>
  </div>
  
  <div class="bg-gray-50 p-4 rounded-lg">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <div class="text-base font-bold text-red-800">❌ "Impossível ser hackeado"</div>
      </div>
      <div>
        <div class="text-base font-bold text-green-800">✅ Seguro, mas depende do usuário</div>
      </div>
    </div>
  </div>
  
  <div class="bg-gray-50 p-4 rounded-lg">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <div class="text-base font-bold text-red-800">❌ "É só sobre dinheiro"</div>
      </div>
      <div>
        <div class="text-base font-bold text-green-800">✅ Múltiplas aplicações</div>
      </div>
    </div>
  </div>
</div>

<div class="text-center mt-6">
  <div class="text-sm text-gray-600">
    💡 Logística • Saúde • Identidade • Arte • Jogos
  </div>
</div>

---
layout: center
---

# 💬 Momento Interativo

<div class="text-center space-y-6 mt-8">
  <div class="text-2xl font-bold text-blue-600">
    ❓ Alguma dúvida sobre esses mitos?
  </div>
  
  <div class="text-lg">
  <v-click>
  
  ## 🗣️ Sua vez de perguntar!
  
  <div class="text-sm text-gray-600 mt-4">
    • Você já ouviu algum desses mitos?<br/>
    • Há outros mal-entendidos que gostaria de esclarecer?<br/>
    • Algum conceito precisa ser mais explicado?
  </div>
  
  </v-click>
  </div>
  
  <div class="text-center mt-8">
  <v-click>
  
  <div class="text-lg font-bold klever-gradient-text">
    🚀 Vamos continuar construindo conhecimento juntos!
  </div>
  
  </v-click>
  </div>
</div>

---
layout: center
---

# Tokens vs Moedas

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="bg-yellow-50 p-6 rounded-lg">
    <div class="text-2xl mb-4">💲</div>
    <div class="text-lg font-bold text-yellow-800 mb-2">Criptomoedas</div>
    <div class="text-sm text-gray-600">
      • Blockchain própria<br/>
      • Função: meio de troca<br/>
      • Exemplos: BTC, ETH, KLV
    </div>
  </div>
  
  <div class="bg-purple-50 p-6 rounded-lg">
    <div class="text-2xl mb-4">🎫</div>
    <div class="text-lg font-bold text-purple-800 mb-2">Tokens</div>
    <div class="text-sm text-gray-600">
      • Construídos sobre blockchain<br/>
      • Múltiplas funções<br/>
      • Exemplos: USDT, LINK, UNI
    </div>
  </div>
</div>

---
layout: center
---

# Tipos de Tokens

<div class="grid grid-cols-3 gap-6 mt-8">
  <div class="bg-blue-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">⚡</div>
    <div class="text-lg font-bold text-blue-800">Utility</div>
    <div class="text-sm text-gray-600">Acesso a serviços</div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">🏛️</div>
    <div class="text-lg font-bold text-green-800">Governance</div>
    <div class="text-sm text-gray-600">Votação e decisões</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">🎨</div>
    <div class="text-lg font-bold text-purple-800">NFT</div>
    <div class="text-sm text-gray-600">Único e raro</div>
  </div>
</div>

<div class="grid grid-cols-3 gap-6 mt-6">
  <div class="bg-orange-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">🔒</div>
    <div class="text-lg font-bold text-orange-800">Stablecoin</div>
    <div class="text-sm text-gray-600">Valor estável</div>
  </div>
  
  <div class="bg-yellow-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">📈</div>
    <div class="text-lg font-bold text-yellow-800">Security</div>
    <div class="text-sm text-gray-600">Investimento</div>
  </div>
  
  <div class="bg-gray-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">💳</div>
    <div class="text-lg font-bold text-blue-800">Payment</div>
    <div class="text-sm text-gray-600">Meio de pagamento</div>
  </div>
</div>

---
layout: center
---

# Exemplos de Tokens

<div class="grid grid-cols-3 gap-6 mt-8">
  <div class="bg-blue-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">⚡</div>
    <div class="text-lg font-bold text-blue-800">Utility</div>
    <div class="text-sm text-gray-600 space-y-1">
      <div>• BNB (Binance)</div>
      <div>• LINK (Chainlink)</div>
      <div>• UNI (Uniswap)</div>
    </div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">🏛️</div>
    <div class="text-lg font-bold text-green-800">Governance</div>
    <div class="text-sm text-gray-600 space-y-1">
      <div>• KFI (Klever)</div>
      <div>• COMP (Compound)</div>
      <div>• MKR (MakerDAO)</div>
    </div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">🎨</div>
    <div class="text-lg font-bold text-purple-800">NFT</div>
    <div class="text-sm text-gray-600 space-y-1">
      <div>• CryptoPunks</div>
      <div>• Bored Apes</div>
      <div>• Art Blocks</div>
    </div>
  </div>
</div>

<div class="grid grid-cols-3 gap-6 mt-6">
  <div class="bg-orange-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">🔒</div>
    <div class="text-lg font-bold text-orange-800">Stablecoin</div>
    <div class="text-sm text-gray-600 space-y-1">
      <div>• USDT (Tether)</div>
      <div>• USDC (Circle)</div>
      <div>• DAI (MakerDAO)</div>
    </div>
  </div>
  
  <div class="bg-yellow-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">📈</div>
    <div class="text-lg font-bold text-yellow-800">Security</div>
    <div class="text-sm text-gray-600 space-y-1">
      <div>• Tokens de ações</div>
      <div>• REITs tokenizados</div>
      <div>• Títulos digitais</div>
    </div>
  </div>
  
  <div class="bg-gray-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">💳</div>
    <div class="text-lg font-bold text-blue-800">Payment</div>
    <div class="text-sm text-gray-600 space-y-1">
      <div>• BTC (Bitcoin)</div>
      <div>• LTC (Litecoin)</div>
      <div>• KLV (Klever)</div>
    </div>
  </div>
</div>

---
layout: center
---

# 💬 Momento Interativo - Tokens

<div class="text-center space-y-6 mt-8">
  <div class="text-2xl font-bold text-blue-600">
    🔄 Pausa para Dúvidas
  </div>
  
  <div class="text-lg">
    <v-click>

## 🗣️ Perguntas sobre Tokens

<div class="text-sm text-gray-600 mt-4">
  • Ficou claro a diferença entre moedas e tokens?<br/>
  • Alguma dúvida sobre os tipos de tokens?<br/>
  • Querem exemplos específicos de algum tipo?<br/>
  • Como identificar um bom projeto de token?
</div>

</v-click>
  </div>
  
  <div class="text-center mt-8">
  <v-click>
  
  <div class="text-lg font-bold klever-gradient-text">
    💡 Vamos esclarecer tudo antes de ver o mercado!
  </div>
  
  </v-click>
  </div>
</div>

---
layout: center
---

# O Mercado Web3 Hoje

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="space-y-4">
    <div class="bg-green-50 p-4 rounded-lg">
      <div class="text-2xl font-bold text-green-600">$3.43T</div>
      <div class="text-sm text-gray-600">Capitalização total do mercado cripto</div>
      <div class="text-xs mt-1">
        <a href="https://www.coingecko.com/en/global-charts" target="_blank" class="text-gray-500 no-underline" style="text-decoration: none; color: #6B7280;">
          *CoinGecko, Jul 2025
        </a>
      </div>
    </div>
    <div class="bg-blue-50 p-4 rounded-lg">
      <div class="text-2xl font-bold text-blue-600">560M</div>
      <div class="text-sm text-gray-600">Usuários blockchain mundial</div>
      <div class="text-xs mt-1">
        <a href="https://www.demandsage.com/blockchain-statistics/" target="_blank" class="text-gray-500 no-underline" style="text-decoration: none; color: #6B7280;">
          *DemandSage, 2024
        </a>
      </div>
    </div>
  </div>
  
  <div class="space-y-4">
    <div class="bg-purple-50 p-4 rounded-lg">
      <div class="text-2xl font-bold text-purple-600">$214B</div>
      <div class="text-sm text-gray-600">DeFi Total Value Locked</div>
      <div class="text-xs mt-1">
        <a href="https://cryptotvplus.com/2025/01/defi-tvl-surged-211-to-214b-in-2024-solana-jumped-2000/" target="_blank" class="text-gray-500 no-underline" style="text-decoration: none; color: #6B7280;">
          *CryptoTVplus, Jan 2025
        </a>
      </div>
    </div> 
    <div class="bg-orange-50 p-4 rounded-lg">
      <div class="text-2xl font-bold text-orange-600">$13.6B</div>
      <div class="text-sm text-gray-600">Investimentos VC em 2024</div>
      <div class="text-xs mt-1">
        <a href="https://cointelegraph.com/news/vc-roundup-crypto-funding-climbs-13-6-billion-2024" target="_blank" class="text-gray-500 no-underline" style="text-decoration: none; color: #6B7280;">
          *Cointelegraph, 2024
        </a>
      </div>
    </div>
  </div>
</div>

<div class="text-center mt-6">
  <div class="text-xs text-gray-500">
    Fontes: CoinGecko, DemandSage, CryptoTVplus e CoinMarketCap - Dados atualizados para 2024-2025
  </div>
</div>

---
layout: center
---

# Ecossistema Web3

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="space-y-4">
    <div class="bg-blue-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-blue-800">🏦 DeFi</div>
      <div class="text-sm text-gray-600">Finanças descentralizadas</div>
    </div>
    <div class="bg-green-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-green-800">🎮 GameFi</div>
      <div class="text-sm text-gray-600">Jogos blockchain</div>
    </div>
  </div>
  
  <div class="space-y-4">
    <div class="bg-purple-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-purple-800">🏛️ DAOs</div>
      <div class="text-sm text-gray-600">Organizações autônomas</div>
    </div>
    <div class="bg-orange-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-orange-800">🌐 Metaverso</div>
      <div class="text-sm text-gray-600">Mundos virtuais</div>
    </div>
  </div>
</div>

---
layout: center
---

# Oportunidades de Negócio

<div class="space-y-6 mt-8">
  <div class="text-center">
    <div class="text-lg font-bold text-green-600">🚀 Casos de Sucesso</div>
  </div>
  
  <div class="grid grid-cols-3 gap-6">
    <div class="text-center">
      <div class="text-3xl mb-2">🦄</div>
      <div class="text-lg font-bold">Uniswap</div>
      <div class="text-sm text-gray-600">Exchange descentralizada</div>
    </div>
    <div class="text-center">
      <div class="text-3xl mb-2">🏪</div>
      <div class="text-lg font-bold">OpenSea</div>
      <div class="text-sm text-gray-600">Marketplace NFT</div>
    </div>
    <div class="text-center">
      <div class="text-3xl mb-2">🎯</div>
      <div class="text-lg font-bold">Axie Infinity</div>
      <div class="text-sm text-gray-600">Play-to-Earn</div>
    </div>
  </div>
</div>

---
layout: center
---

# Tendências 2025

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="space-y-4">
    <div class="flex items-center space-x-3">
      <div class="text-2xl">🔗</div>
      <div>
        <div class="text-lg font-bold">Interoperabilidade</div>
        <div class="text-sm text-gray-600">Conexão entre blockchains</div>
      </div>
    </div>
    <div class="flex items-center space-x-3">
      <div class="text-2xl">🤖</div>
      <div>
        <div class="text-lg font-bold">AI + Web3</div>
        <div class="text-sm text-gray-600">Inteligência artificial descentralizada</div>
      </div>
    </div>
  </div>
  
  <div class="space-y-4">
    <div class="flex items-center space-x-3">
      <div class="text-2xl">🌱</div>
      <div>
        <div class="text-lg font-bold">Sustentabilidade</div>
        <div class="text-sm text-gray-600">Blockchains eco-friendly</div>
      </div>
    </div>
    <div class="flex items-center space-x-3">
      <div class="text-2xl">🏛️</div>
      <div>
        <div class="text-lg font-bold">Regulamentação</div>
        <div class="text-sm text-gray-600">Frameworks legais claros</div>
      </div>
    </div>
  </div>
</div>

---
layout: section
---

# <GradientText>Dia 2: Desenvolvimento</GradientText>
Construindo no Web3

---
layout: center
---

# 📱 Explorando a Klever Wallet

<div class="text-center mb-8">
  <div class="text-xl font-bold text-blue-600">
    Demonstração Prática
  </div>
  <div class="text-sm text-gray-600">
    Sua porta de entrada para o mundo Web3
  </div>
</div>

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="space-y-4">
    <div class="bg-blue-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-blue-800">🔧 Recursos Principais</div>
      <div class="text-sm text-gray-600">
        • Múltiplas criptomoedas<br/>
        • Interface intuitiva<br/>
        • Segurança avançada<br/>
        • Staking integrado
      </div>
    </div>
    <div class="bg-green-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-green-800">📊 Funcionalidades</div>
      <div class="text-sm text-gray-600">
        • Enviar e receber<br/>
        • Histórico de transações<br/>
        • Conversão de moedas<br/>
        • Backup seguro
      </div>
    </div>
  </div>
  
  <div class="bg-purple-50 p-6 rounded-lg">
    <div class="text-lg font-bold text-purple-800 mb-4">💡 Demonstração ao Vivo</div>
    <div class="text-sm text-gray-600 space-y-2">
      <div>1. 📱 Abrindo a Klever Wallet</div>
      <div>2. 👀 Navegando pela interface</div>
      <div>3. 💰 Visualizando saldos</div>
      <div>4. 📜 Histórico de transações</div>
      <div>5. 🔐 Configurações de segurança</div>
    </div>
  </div>
</div>

---
layout: center
---

# 🔐 Chaves e Segurança na Prática

<div class="text-center mb-8">
  <div class="text-xl font-bold text-red-600">
    Conceitos Fundamentais de Segurança
  </div>
</div>

<div class="grid grid-cols-3 gap-6 mt-8">
  <div class="bg-blue-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">🔑</div>
    <div class="text-lg font-bold text-blue-800">Chave Privada</div>
    <div class="text-sm text-gray-600 mt-2">
      • Nunca compartilhe<br/>
      • Controla seus fundos<br/>
      • Assinatura digital
    </div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">🏷️</div>
    <div class="text-lg font-bold text-green-800">Chave Pública</div>
    <div class="text-sm text-gray-600 mt-2">
      • Pode ser compartilhada<br/>
      • Gera seu endereço<br/>
      • Recebe transações
    </div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">📝</div>
    <div class="text-lg font-bold text-purple-800">Seed Phrase</div>
    <div class="text-sm text-gray-600 mt-2">
      • 12-24 palavras<br/>
      • Backup da carteira<br/>
      • Guarde offline
    </div>
  </div>
</div>

<div class="text-center mt-8">
  <div class="text-lg font-bold text-red-600">
    ⚠️ Demonstração: Como ver sua seed phrase na Klever Wallet
  </div>
</div>

---
layout: center
---

# 💸 Realizando uma Transação

<div class="text-center mb-8">
  <div class="text-xl font-bold text-green-600">
    Passo a Passo Prático
  </div>
  <div class="text-sm text-gray-600">
    Enviando KLV na prática
  </div>
</div>

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="space-y-4">
    <div class="bg-blue-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-blue-800">📋 Pré-requisitos</div>
      <div class="text-sm text-gray-600">
        • Saldo suficiente<br/>
        • Endereço destinatário<br/>
        • Verificar taxa de rede<br/>
        • Confirmar todos os dados
      </div>
    </div>
    <div class="bg-green-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-green-800">🔄 Processo</div>
      <div class="text-sm text-gray-600">
        • Selecionar "Enviar"<br/>
        • Inserir endereço<br/>
        • Definir valor<br/>
        • Revisar e confirmar
      </div>
    </div>
  </div>
  
  <div class="bg-orange-50 p-6 rounded-lg">
    <div class="text-lg font-bold text-orange-800 mb-4">🎯 Demonstração ao Vivo</div>
    <div class="text-sm text-gray-600 space-y-2">
      <div>1. 🎯 Acessar função "Enviar"</div>
      <div>2. 📝 Inserir endereço do destinatário</div>
      <div>3. 💰 Definir valor a enviar</div>
      <div>4. 🔍 Revisar taxa de rede</div>
      <div>5. ✅ Confirmar transação</div>
      <div>6. 📱 Acompanhar status</div>
    </div>
  </div>
</div>

<div class="text-center mt-8">
  <div class="text-lg font-bold text-purple-600">
    💡 Vamos fazer uma transação de teste juntos!
  </div>
</div>

---
layout: center
---

# 💬 Momento Interativo - Wallet

<div class="text-center space-y-6 mt-8">
  <div class="text-2xl font-bold text-blue-600">
    🗣️ Perguntas sobre Carteiras
  </div>
  
  <div class="grid grid-cols-2 gap-8">
    <div class="space-y-4">
      <div class="bg-blue-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-blue-800">❓ Dúvidas Técnicas</div>
        <div class="text-sm text-gray-600">
          • Como criar uma carteira?<br/>
          • Diferenças entre carteiras?<br/>
          • Como importar/exportar?<br/>
          • Problemas de acesso?
        </div>
      </div>
    </div>
    <div class="space-y-4">
      <div class="bg-green-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-green-800">🔐 Segurança</div>
        <div class="text-sm text-gray-600">
          • Melhores práticas?<br/>
          • Como guardar seed phrase?<br/>
          • Autenticação 2FA?<br/>
          • Dispositivos seguros?
        </div>
      </div>
    </div>
  </div>
  
  <div class="text-center mt-8">
    <div class="text-lg font-bold klever-gradient-text">
      🚀 Vamos esclarecer tudo antes de continuar!
    </div>
  </div>
</div>

---
layout: center
---

# 🛡️ Segurança em Cripto - Melhores Práticas

<div class="text-center mb-8">
  <div class="text-xl font-bold text-red-600">
    Protegendo Seus Ativos Digitais
  </div>
  <div class="text-sm text-gray-600">
    Dicas essenciais para evitar perdas
  </div>
</div>

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="space-y-4">
    <div class="bg-gray-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-red-800">🚫 NUNCA Faça</div>
      <div class="text-sm text-gray-600">
        • Compartilhar seed phrase<br/>
        • Clicar em links suspeitos<br/>
        • Enviar para endereços não verificados<br/>
        • Usar WiFi público para transações<br/>
        • Guardar senhas no navegador
      </div>
    </div>
    <div class="bg-green-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-green-800">✅ SEMPRE Faça</div>
      <div class="text-sm text-gray-600">
        • Verificar endereços duas vezes<br/>
        • Usar autenticação 2FA<br/>
        • Manter backup offline da seed<br/>
        • Verificar URLs oficiais<br/>
        • Atualizar aplicativos regularmente
      </div>
    </div>
  </div>
  
  <div class="space-y-4">
    <div class="bg-orange-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-orange-800">⚠️ Golpes Comuns</div>
      <div class="text-sm text-gray-600">
        • Phishing (sites falsos)<br/>
        • Esquemas Ponzi<br/>
        • Suporte falso<br/>
        • "Oportunidades" urgentes<br/>
        • Carteiras comprometidas
      </div>
    </div>
    <div class="bg-purple-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-purple-800">🔐 Backup Seguro</div>
      <div class="text-sm text-gray-600">
        • Escrever em papel<br/>
        • Guardar em local seguro<br/>
        • Múltiplas cópias<br/>
        • Nunca fotografar<br/>
        • Testar restore periodicamente
      </div>
    </div>
  </div>
</div>

---
layout: center
---

# 🔍 Explorando o KleverScan

<div class="text-center mb-8">
  <div class="text-xl font-bold text-blue-600">
    Rastreando Transações na Blockchain
  </div>
  <div class="text-sm text-gray-600">
    O explorador oficial da KleverChain
  </div>
</div>

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="space-y-4">
    <div class="bg-blue-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-blue-800">🔍 O que Consultar</div>
      <div class="text-sm text-gray-600">
        • Hash de transações<br/>
        • Endereços de carteiras<br/>
        • Detalhes de blocos<br/>
        • Histórico de transfers<br/>
        • Status de validações
      </div>
    </div>
    <div class="bg-green-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-green-800">📊 Informações Disponíveis</div>
      <div class="text-sm text-gray-600">
        • Data e hora da transação<br/>
        • Valor transferido<br/>
        • Taxa de rede paga<br/>
        • Confirmações recebidas<br/>
        • Endereços origem/destino
      </div>
    </div>
  </div>
  
  <div class="bg-purple-50 p-6 rounded-lg">
    <div class="text-lg font-bold text-purple-800 mb-4">💡 Demonstração Prática</div>
    <div class="text-sm text-gray-600 space-y-2">
      <div>1. 🌐 Acessar KleverScan.org</div>
      <div>2. 🔍 Buscar por hash de transação</div>
      <div>3. 📊 Analisar detalhes da transação</div>
      <div>4. 👤 Explorar endereços de carteiras</div>
      <div>5. 📈 Verificar estatísticas da rede</div>
      <div>6. ⚡ Acompanhar status em tempo real</div>
    </div>
  </div>
</div>

<div class="text-center mt-8">
  <div class="text-lg font-bold text-green-600">
    🔬 Vamos explorar uma transação real juntos!
  </div>
</div>

---
layout: center
---

# 💬 Momento Interativo - Segurança

<div class="text-center space-y-6 mt-8">
  <div class="text-2xl font-bold text-red-600">
    🛡️ Quiz de Segurança
  </div>
  
  <div class="grid grid-cols-2 gap-8">
    <div class="space-y-4">
      <div class="bg-blue-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-blue-800">❓ Perguntas Rápidas</div>
        <div class="text-sm text-gray-600">
          • Posso compartilhar minha seed phrase?<br/>
          • Onde devo guardar meu backup?<br/>
          • Como verificar se um site é oficial?<br/>
          • O que fazer se perder acesso?
        </div>
      </div>
    </div>
    <div class="space-y-4">
      <div class="bg-gray-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-red-800">🚨 Cenários</div>
        <div class="text-sm text-gray-600">
          • Alguém pede sua seed phrase<br/>
          • Link suspeito no WhatsApp<br/>
          • "Suporte" pedindo acesso<br/>
          • Oportunidade "imperdível"
        </div>
      </div>
    </div>
  </div>
  
  <div class="text-center mt-8">
    <div class="text-lg font-bold klever-gradient-text">
      🧠 Vamos testar seus conhecimentos de segurança!
    </div>
  </div>
</div>

---
layout: center
---

# Linguagens para Web3

<div class="grid grid-cols-2 gap-6 mt-8">
  <div class="bg-orange-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">🦀</div>
    <div class="text-lg font-bold text-orange-800">Rust</div>
    <div class="text-sm text-gray-600">Segurança + Performance</div>
  </div>
  
  <div class="bg-blue-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">💎</div>
    <div class="text-lg font-bold text-blue-800">Solidity</div>
    <div class="text-sm text-gray-600">Ethereum padrão</div>
  </div>
</div>

<div class="text-center mt-8">
  <div class="text-lg font-bold text-orange-600">
    🎯 Foco no Rust para KVM
  </div>
</div>

---
layout: center
---

# KVM Framework

<div class="grid grid-cols-3 gap-6 mt-8">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-blue-800 mb-2">🚀 Por que KVM?</div>
    <div class="text-sm text-gray-600">
      • Framework completo em Rust<br/>
      • Documentação extensiva<br/>
      • Comunidade ativa<br/>
      • Ferramentas integradas
    </div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-green-800 mb-2">🛠️ Recursos Principais</div>
    <div class="text-sm text-gray-600">
      • Smart contracts em Rust<br/>
      • Framework de testes<br/>
      • Serialização de dados<br/>
      • Interação com blockchain
    </div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-purple-800 mb-2">📚 Aprendizado</div>
    <div class="text-sm text-gray-600">
      • Tutorial de crowdfunding<br/>
      • Exemplos práticos<br/>
      • Extensão VSCode<br/>
      • Debugging avançado
    </div>
  </div>
</div>

---
layout: center
---

# Configuração do Ambiente

<div class="space-y-6 mt-8">
  <div class="text-center">
    <div class="text-lg font-bold text-blue-600">🔧 Ferramentas Necessárias</div>
  </div>
  
  <div class="grid grid-cols-2 gap-8">
    <div class="space-y-4">
      <div class="bg-orange-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-orange-800">1. Rust</div>
        <div class="text-sm text-gray-600">Linguagem principal</div>
      </div>
      <div class="bg-blue-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-blue-800">2. VSCode</div>
        <div class="text-sm text-gray-600">Editor recomendado</div>
      </div>
    </div>
    <div class="space-y-4">
      <div class="bg-green-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-green-800">3. KVM SDK</div>
        <div class="text-sm text-gray-600">Framework completo</div>
      </div>
      <div class="bg-purple-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-purple-800">4. Extensão VSCode</div>
        <div class="text-sm text-gray-600">Ferramentas integradas</div>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

# Primeiro Smart Contract

```rust {all|1-3|5-6|7-8|10-11|13-16|all}
#![no_std]

use klever_sc::imports::*;

#[klever_sc::contract]
pub trait HelloWorld: ContractBase {
    #[init]
    fn init(&self) {}

    #[event("message")]
    fn message(&self, msg: &str);

    #[endpoint]
    fn send_message(&self) {
        self.message("Hello World!");
    }
}
```

<div class="text-center mt-4">
  <div class="text-lg font-bold text-green-600">
    🎉 Seu primeiro contrato inteligente!
  </div>
</div>

---
layout: center
---

# Estrutura de um Projeto

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-blue-800 mb-2">📁 Arquivos Principais</div>
    <div class="text-sm text-gray-600">
      <div class="font-bold mb-2">my-contract/</div>
      • <strong>src/lib.rs</strong> - Código principal do contrato<br/>
      • <strong>Cargo.toml</strong> - Dependências Rust<br/>
      • <strong>kleverkapp.json</strong> - Configuração do projeto<br/>
      • <strong>tests/</strong> - Testes unitários
    </div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-green-800 mb-2">🔧 Funcionalidade</div>
    <div class="text-sm text-gray-600">
      • <strong>src/lib.rs</strong>: Lógica do smart contract<br/>
      • <strong>Cargo.toml</strong>: Gerenciamento de dependências<br/>
      • <strong>kleverkapp.json</strong>: Configurações específicas<br/>
      • <strong>tests/</strong>: Validação e testes
    </div>
  </div>
</div>

---
layout: center
---

# Armazenamento de Dados

```rust {1-8|10-15|17-22|all}
#[klever_sc::contract]
pub trait Counter {
    #[view(getCount)]
    #[storage_mapper("count")]
    fn count(&self) -> SingleValueMapper<u64>;

    #[init]
    fn init(&self, initial_value: u64) {
        self.count().set(initial_value);
    }

    #[endpoint]
    fn increment(&self) {
        self.count().update(|x| *x += 1);
    }
}
```

<div class="text-center mt-4">
  <div class="text-lg font-bold text-blue-600">
    📊 Gerenciamento de estado persistente
  </div>
</div>

---
layout: center
---

# Interação com Tokens

```rust {1-10|12-18|20-25|all}
#[klever_sc::contract]
pub trait TokenContract {
    #[payable("KLV")]
    #[endpoint]
    fn deposit(&self) {
        let payment = self.call_value().klv_value();
        require!(payment > 0, "Must send KLV");
        // Lógica de depósito
    }

    #[endpoint]
    fn withdraw(&self, amount: BigUint) {
        // Verificações de segurança
        self.send().direct_klv(&self.blockchain().get_caller(), &amount);
    }
}
```

<div class="text-center mt-4">
  <div class="text-lg font-bold text-purple-600">
    💰 Manipulação segura de tokens
  </div>
</div>

---
layout: center
---

# Deploy e Interação

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="bg-blue-50 p-6 rounded-lg">
    <div class="text-lg font-bold text-blue-800 mb-4">🚀 Deploy</div>
    <div class="text-sm text-gray-600 space-y-2">
      <div>1. Compilar o contrato</div>
      <div>2. Configurar rede</div>
      <div>3. Enviar transação</div>
      <div>4. Aguardar confirmação</div>
    </div>
  </div>
  
  <div class="bg-green-50 p-6 rounded-lg">
    <div class="text-lg font-bold text-green-800 mb-4">⚡ Interação</div>
    <div class="text-sm text-gray-600 space-y-2">
      <div>1. Conectar carteira</div>
      <div>2. Chamar endpoints</div>
      <div>3. Monitorar eventos</div>
      <div>4. Debugar problemas</div>
    </div>
  </div>
</div>

---
layout: section
---

# <GradientText>Dia 3: Competição</GradientText>
Criando o Futuro Web3

---
layout: center
---

# 🏆 Hackathon Web3

<div class="text-center space-y-6 mt-8">
  <div class="text-2xl font-bold text-purple-600">
    Transforme ideias tradicionais em soluções Web3
  </div>
  
  <div class="grid grid-cols-3 gap-6">
    <div class="bg-blue-50 p-4 rounded-lg">
      <div class="text-3xl mb-2">🎯</div>
      <div class="text-lg font-bold text-blue-800">Objetivo</div>
      <div class="text-sm text-gray-600">Criar soluções inovadoras</div>
    </div>
    <div class="bg-green-50 p-4 rounded-lg">
      <div class="text-3xl mb-2">⏱️</div>
      <div class="text-lg font-bold text-green-800">Tempo</div>
      <div class="text-sm text-gray-600">2 horas de desenvolvimento</div>
    </div>
    <div class="bg-purple-50 p-4 rounded-lg">
      <div class="text-3xl mb-2">🏅</div>
      <div class="text-lg font-bold text-purple-800">Premiação</div>
      <div class="text-sm text-gray-600">Reconhecimento + Prêmios</div>
    </div>
  </div>
</div>

---
layout: center
---

# Regras da Competição

<div class="space-y-4 mt-8">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-blue-800">🎯 Desafio</div>
    <div class="text-sm text-gray-600">Adapte uma solução tradicional para Web3</div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-green-800">👥 Equipes</div>
    <div class="text-sm text-gray-600">3-5 pessoas por equipe</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-purple-800">📋 Entregáveis</div>
    <div class="text-sm text-gray-600">Protótipo + Pitch de 5 minutos</div>
  </div>
  
  <div class="bg-orange-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-orange-800">🏆 Critérios</div>
    <div class="text-sm text-gray-600">Inovação • Viabilidade • Apresentação</div>
  </div>
</div>

---
layout: center
---

# Exemplos Inspiradores

<div class="grid grid-cols-3 gap-6 mt-8">
  <div class="bg-blue-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">🚗</div>
    <div class="text-lg font-bold text-blue-800">Uber</div>
    <div class="text-sm text-gray-600">→ Rideshare descentralizado</div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">🏠</div>
    <div class="text-lg font-bold text-green-800">Airbnb</div>
    <div class="text-sm text-gray-600">→ Hospedagem via DAO</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">📸</div>
    <div class="text-lg font-bold text-purple-800">Instagram</div>
    <div class="text-sm text-gray-600">→ Social + NFT</div>
  </div>
</div>

<div class="grid grid-cols-3 gap-6 mt-6">
  <div class="bg-orange-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">🍕</div>
    <div class="text-lg font-bold text-orange-800">iFood</div>
    <div class="text-sm text-gray-600">→ Delivery Web3</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">🎵</div>
    <div class="text-lg font-bold text-purple-800">Spotify</div>
    <div class="text-sm text-gray-600">→ Streaming + NFT</div>
  </div>
  
  <div class="bg-blue-50 p-4 rounded-lg text-center">
    <div class="text-2xl mb-2">🏦</div>
    <div class="text-lg font-bold text-blue-800">Banco</div>
    <div class="text-sm text-gray-600">→ DeFi completo</div>
  </div>
</div>

---
layout: center
---

# Metodologia de Ideação

<div class="space-y-6 mt-8">
  <div class="bg-blue-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-blue-800">1. 🎯 Identifique o Problema</div>
    <div class="text-sm text-gray-600">Qual dor o serviço tradicional resolve?</div>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-green-800">2. 🔍 Encontre Limitações</div>
    <div class="text-sm text-gray-600">Onde a centralização causa problemas?</div>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-purple-800">3. 💡 Pense em Web3</div>
    <div class="text-sm text-gray-600">Como descentralizar melhoraria?</div>
  </div>
  
  <div class="bg-orange-50 p-4 rounded-lg">
    <div class="text-lg font-bold text-orange-800">4. 🚀 Valide a Ideia</div>
    <div class="text-sm text-gray-600">É tecnicamente viável?</div>
  </div>
</div>

---
layout: center
---

# Brainstorming em Equipe

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="space-y-4">
    <div class="bg-blue-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-blue-800">🧠 Técnicas</div>
      <div class="text-sm text-gray-600">
        • Brainstorming livre<br/>
        • Mapa mental<br/>
        • Análise SWOT<br/>
        • Prototipagem rápida
      </div>
    </div>
    <div class="bg-green-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-green-800">⏱️ Cronograma</div>
      <div class="text-sm text-gray-600">
        • 15 min: Ideação<br/>
        • 15 min: Discussão<br/>
        • 15 min: Refinamento<br/>
        • 15 min: Validação
      </div>
    </div>
  </div>
  
  <div class="space-y-4">
    <div class="bg-purple-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-purple-800">✅ Checklist</div>
      <div class="text-sm text-gray-600">
        • Problema real?<br/>
        • Web3 adiciona valor?<br/>
        • Tecnicamente viável?<br/>
        • Mercado existe?
      </div>
    </div>
    <div class="bg-orange-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-orange-800">🎯 Foco</div>
      <div class="text-sm text-gray-600">
        • MVP simples<br/>
        • Funcionalidade core<br/>
        • Diferencial claro<br/>
        • Execução factível
      </div>
    </div>
  </div>
</div>

---
layout: center
---

# Desenvolvimento - MVP

<div class="space-y-6 mt-8">
  <div class="text-center">
    <div class="text-lg font-bold text-blue-600">🛠️ 2 Horas para Criar o Futuro</div>
  </div>
  
  <div class="grid grid-cols-2 gap-8">
    <div class="space-y-4">
      <div class="bg-blue-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-blue-800">🎯 Foco no Essencial</div>
        <div class="text-sm text-gray-600">
          • Uma funcionalidade principal<br/>
          • Interface simples<br/>
          • Smart contract básico<br/>
          • Demonstração clara
        </div>
      </div>
      <div class="bg-green-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-green-800">⚡ Ferramentas</div>
        <div class="text-sm text-gray-600">
          • KVM SDK<br/>
          • Templates prontos<br/>
          • Documentação rápida<br/>
          • Mentores disponíveis
        </div>
      </div>
    </div>
    <div class="space-y-4">
      <div class="bg-purple-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-purple-800">📋 Entregáveis</div>
        <div class="text-sm text-gray-600">
          • Código funcional<br/>
          • Slides da apresentação<br/>
          • Demo preparada<br/>
          • Documentação básica
        </div>
      </div>
      <div class="bg-orange-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-orange-800">🏆 Dicas de Sucesso</div>
        <div class="text-sm text-gray-600">
          • Começar simples<br/>
          • Testar frequentemente<br/>
          • Dividir tarefas<br/>
          • Preparar bem o pitch
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

# Apresentação e Pitch

<div class="space-y-6 mt-8">
  <div class="text-center">
    <div class="text-lg font-bold text-purple-600">🎤 5 Minutos para Impressionar</div>
  </div>
  
  <div class="grid grid-cols-2 gap-8">
    <div class="space-y-4">
      <div class="bg-blue-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-blue-800">📋 Estrutura</div>
        <div class="text-sm text-gray-600">
          • Problema (30s)<br/>
          • Solução (60s)<br/>
          • Demo (180s)<br/>
          • Próximos passos (30s)
        </div>
      </div>
      <div class="bg-green-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-green-800">🎯 Foco</div>
        <div class="text-sm text-gray-600">
          • Demonstração clara<br/>
          • Benefícios do Web3<br/>
          • Diferencial único<br/>
          • Potencial de mercado
        </div>
      </div>
    </div>
    <div class="space-y-4">
      <div class="bg-purple-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-purple-800">✨ Critérios</div>
        <div class="text-sm text-gray-600">
          • Inovação (30%)<br/>
          • Viabilidade técnica (30%)<br/>
          • Apresentação (25%)<br/>
          • Potencial de impacto (15%)
        </div>
      </div>
      <div class="bg-orange-50 p-4 rounded-lg">
        <div class="text-lg font-bold text-orange-800">🏆 Premiação</div>
        <div class="text-sm text-gray-600">
          • 1º lugar: [A definir]<br/>
          • 2º lugar: [A definir]<br/>
          • 3º lugar: [A definir]<br/>
          • Menção honrosa: [A definir]
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

# Recursos e Próximos Passos

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="space-y-4">
    <div class="bg-blue-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-blue-800">📚 Continuando o Aprendizado</div>
      <div class="text-sm text-gray-600">
        • Documentação KVM<br/>
        • Comunidade Discord<br/>
        • Tutoriais avançados<br/>
        • Projetos open source
      </div>
    </div>
    <div class="bg-green-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-green-800">🤝 Comunidade</div>
      <div class="text-sm text-gray-600">
        • Klever Builders<br/>
        • Eventos regulares<br/>
        • Mentoria contínua<br/>
        • Networking ativo
      </div>
    </div>
  </div>
  
  <div class="space-y-4">
    <div class="bg-purple-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-purple-800">🚀 Oportunidades</div>
      <div class="text-sm text-gray-600">
        • Vagas em Web3<br/>
        • Projetos freelance<br/>
        • Startups blockchain<br/>
        • Hackathons futuros
      </div>
    </div>
    <div class="bg-orange-50 p-4 rounded-lg">
      <div class="text-lg font-bold text-orange-800">💰 Financiamento</div>
      <div class="text-sm text-gray-600">
        • Grants da Klever<br/>
        • Programas de incubação<br/>
        • Investidores Web3<br/>
        • Competições globais
      </div>
    </div>
  </div>
</div>

---
layout: center
---

# <GradientText>Obrigado!</GradientText>

<div class="text-center space-y-8 mt-8">
  <div class="text-2xl font-bold klever-gradient-text mb-8">
    🎉 Vocês são o futuro do Web3!
  </div>
  
  <div class="grid grid-cols-2 gap-8">
    <KleverCard 
      icon="🌐" 
      title="Website" 
      description="klever.org"
    />
    <KleverCard 
      icon="💬" 
      title="Fórum" 
      description="forum.klever.org"
    />
  </div>
  
  <div class="text-xl font-bold klever-gradient-text mt-12">
    Perguntas?
  </div>
</div>

---
layout: end
---

# <span style="background: linear-gradient(135deg, #E879F9 0%, #60A5FA 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 800;">Até a próxima!</span>

<div class="text-center mt-8" style="color: #D1D5DB; font-size: 1.125rem;">
  Workshop Web3 • Klever • 2025
</div>

<!--
Notas para o apresentador:

Dia 1:
- Enfatizar a importância da descentralização
- Usar exemplos práticos e visuais
- Incentivar perguntas e interação
- Fazer pausas regulares para dúvidas

Dia 2:
- Garantir que todos têm o ambiente configurado
- Acompanhar o progresso individual
- Oferecer suporte técnico constante
- Demonstrar cada conceito na prática

Dia 3:
- Manter energia alta para a competição
- Circular entre as equipes oferecendo ajuda
- Incentivar colaboração e criatividade
- Celebrar todas as conquistas

Dicas gerais:
- Adaptar o ritmo conforme o público
- Usar breakout rooms para discussões
- Incentivar networking entre participantes
- Documentar o progresso para follow-up
-->