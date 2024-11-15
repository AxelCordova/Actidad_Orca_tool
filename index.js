const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Sirve archivos estáticos como el CSS
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>El primer nodejs</title>
        <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
        <div class="container">
            <header>
                <h1>Redis + MySQL + Node.js</h1>
            </header>
            <main>
                <p>¡La aplicación está funcionando correctamente</p>
                <p>Este es prototipo corregido para computo en la nube.</p>
            </main>
            <footer>
                <p>Modificado por Axel Arevalo</p>
            </footer>
        </div>
    </body>
    </html>
  `);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
