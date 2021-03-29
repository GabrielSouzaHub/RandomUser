const faker = require('faker');
const express = require('express');
const app = express();
const port = 300;

faker.locale = 'pt_BR';

const avatar = faker.internet.avatar();
const usuName = faker.name.findName();
const gender = faker.name.gender();
const birth = `${faker.date.past(50, 2000).getDay()}/${faker.date.past(50, 2000).getMonth()}/${faker.date.past(50, 2000).getFullYear()}`;
const email = faker.internet.email(usuName);
const password = faker.internet.password();

app.get('/', (req, res) => {
    res.send(pessoa = [{
        avatar,
        usuName,
        gender,
        birth,
        email,
        password
    }]
    );
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})