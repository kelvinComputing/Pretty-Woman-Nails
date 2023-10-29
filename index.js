const express = require('express');
const path = require('path')
const routerApp = require('./server/router');
const private = require('./server/middleware/validateRoute.js')
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

routerApp(app);

//route Home
app.use('/', express.static(path.resolve(__dirname, 'client', 'Home')));

//route Login
app.use('/iniciosesion', express.static(path.resolve(__dirname, 'client', 'InicioSesion')));

//route Registro
app.use('/registro', express.static(path.resolve(__dirname, 'client', 'registro')));

//route Cita
app.use('/Cita', express.static(path.resolve(__dirname, 'client', 'cita')));
app.use('/:uid/Cita', express.static(path.resolve(__dirname, 'client', 'cita')));
app.use('/:uid/Cita/;id', express.static(path.resolve(__dirname, 'client', 'cita')));

// route Manicura
app.use('/Manicura', express.static(path.resolve(__dirname, 'client', 'Manicura')));
// app.use('/Manicura/:id', express.static(path.resolve(__dirname, 'client', 'Manicura', 'update')));
app.use('/:uid/Manicura', express.static(path.resolve(__dirname, 'client', 'Manicura')));
app.use('/:uid/Manicura/:id', express.static(path.resolve(__dirname, 'client', 'Manicura', 'update')));

// route Masajes
app.use('/Masajes', express.static(path.resolve(__dirname, 'client', 'Masajes')));
// app.use('/Masajes/:id', express.static(path.resolve(__dirname, 'client', 'Masajes', 'update')));
app.use('/:uid/Masajes', express.static(path.resolve(__dirname, 'client', 'Masajes')));
app.use('/:uid/Masajes/:id', express.static(path.resolve(__dirname, 'client', 'Masajes', 'update')));

// route proteccion
app.use('/proteccion', express.static(path.resolve(__dirname, 'client', 'proteccion')));
// app.use('/proteccion/:id', express.static(path.resolve(__dirname, 'client', 'proteccion', 'update')));
app.use('/:uid/proteccion', express.static(path.resolve(__dirname, 'client', 'proteccion')));
app.use('/:uid/proteccion/:id', express.static(path.resolve(__dirname, 'client', 'proteccion', 'update')));

// route cejas
app.use('/cejas', express.static(path.resolve(__dirname, 'client', 'cejas')));
app.use('/:uid/cejas', express.static(path.resolve(__dirname, 'client', 'cejas')));
app.use('/:uid/cejas/:id', express.static(path.resolve(__dirname, 'client', 'cejas', 'update')));

// route pestañas
app.use('/pestana', express.static(path.resolve(__dirname, 'client', 'pestana')));
// app.use('/pestana/:id', express.static(path.resolve(__dirname, 'client', 'pestana', 'update')));
app.use('/:uid/pestana/', express.static(path.resolve(__dirname, 'client', 'pestana')));
app.use('/:uid/pestana/:id', express.static(path.resolve(__dirname, 'client', 'pestana', 'update')));
// route Home con uid
app.use('/:uid', express.static(path.resolve(__dirname, 'client', 'Home')));

app.listen(3200, () => {
    console.log('Server Runing!');
})