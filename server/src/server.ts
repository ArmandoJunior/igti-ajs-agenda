import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    // response.send('Hello World');

    // JOSON
    response.json([
        'Armando Nascimento',
        'Joaquim Nascimento',
        'Joaquim Junior',
        'Fabiana Santos'
    ])
});

app.listen(3333);