const express = require('express');
// const exphbs = require('express-handlebars');
const { engine } = require('express-handlebars');
const app = express();

// Configurar o mecanismo de renderização Handlebars
app.engine('handlebars', engine({ layoutsDir: __dirname + '/views/layouts/', defaultLayout: '' }));

app.set('view engine', 'handlebars');

// Definir a pasta de visualizações
app.set('views', 'views'); // Certifique-se de criar um diretório "views" no mesmo diretório que seu arquivo app.js

// Definir rotas
app.get('/', (req, res) => {
    res.render('principal'); // Renderiza a primeira visualização (view1.handlebars)
  });

// Definir rotas
app.get('/login', (req, res) => {
  res.render('login'); // Renderiza a primeira visualização (view1.handlebars)
});

app.get('/main', (req, res) => {
  res.render('view2'); // Renderiza a segunda visualização (view2.handlebars)
});
// Inicie o servidor na porta desejada
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
