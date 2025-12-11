// Importando as bibliotecas
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Configurando as variáveis de ambiente
dotenv.config();

// Criando o App
const app = express();

// Configurando para aceitar JSON (importante para receber dados do currículo)
app.use(express.json());
app.use(cors());

// Rota de Teste (Para ver se está vivo)
app.get('/', (req, res) => {
    res.send('Olá! O Backend do Currículo está funcionando! 🚀');
});

// Definindo a porta (Se não tiver no .env, usa a 5000)
const PORT = process.env.PORT || 5000;

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});