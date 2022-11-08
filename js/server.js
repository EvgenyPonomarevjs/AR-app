import express from "express";
import path from "path";

const __dirname = path.resolve(); //Обходная фитча для __dirname
const app = express();
const PORT = process.env.PORT ?? 8000;
//Роутинг к файлу index.html
app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
}) 
//Сообщение в командную строку
app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}!`);
})
