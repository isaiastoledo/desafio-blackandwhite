import express from 'express';
import routes from './routes/routes.js'
const app = express();
const PORT = process.env.PORT || 3000

//carpeta estatica
app.use(express.static("assets")); 


app.use("/", routes)

app.listen(PORT, ()=>console.log(`servidor corriendo en http://localhost:${PORT}`));