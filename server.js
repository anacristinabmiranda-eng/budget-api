const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "A minha API está online 🚀"
  });
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});

