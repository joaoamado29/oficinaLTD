const express = require("express")

const app = express();
const PORTA = 3000;

app.use(express.json());
app.use(express.static("public"));


const tarefas = [
    { id: 1, titulo: "Aprender Backend" },
    { id: 2, titulo: "Aprender Frontend" }
];

app.get("/api/tarefas/", (req, res) => {
    res.json(tarefas);
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});