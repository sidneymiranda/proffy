import express, { response } from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        {name: 'Sidney', age: 32},
        {name: 'Lucas', age: 28},
    ]

    return response.json(users);
});



app.listen(3333);