const express = require('express');
const app = express();
const path = require('path');

// Donde cargar archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

/// Configuraciones
app.set('port', 3000);
app.set('views', path.join(__dirname, "views"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Middleware


// Rutas
app.use(require('./routes/index.js'));


// Archivos Estaticos


// Escuchando el servidor
app.listen(app.get('port'), () => {
	console.log('server on port', app.get('port'))
});