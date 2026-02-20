import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.get('/hello', (req, res) => {
    res.json({ message: 'API REST com Node.js funcionando!' });
});

app.listen(port, () => {
    console.log(`Express em http://localhost:${port}`);
});