import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hola mundo!'
    });
});

app.listen(port, () => {
    console.log(`Aplicación a la escucha en http://localhost:${port}`);
});