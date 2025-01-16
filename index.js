const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para todos los orígenes
app.use(cors());

// Middleware para manejar JSON
app.use(express.json());

// Ruta de ejemplo
app.get('/api/dandadan', (req, res) => {
    res.json({ characters: [{
        "id": 1,
        "name": "Momo Ayase",
        "age": "16",
        "description": "A high school girl who believes in ghosts and the supernatural. After being abducted by Serpo aliens, she discovers her psychokinetic powers, allowing her to visualize and control auras.",
        "image_url": "https://dandadan.fandom.com/wiki/File:Momo_Ayase.png"
      },
      {
        "id": 2,
        "name": "Okarun (",
        "age": "16",
        "description": "A shy and friendless high school boy with an interest in the occult. After being possessed by Turbo Granny, he gains the ability to enter a powerful demonic state, granting him immense speed and a suave yet lethargic alternate personality.",
        "image_url": "https://dandadan.fandom.com/wiki/File:Okarun.png"
      },
      {
        "id": 3,
        "name": "Aira Shiratori",
        "age": "16",
        "description": "The school idol of Kami High. After obtaining one of Okarun's testicles, Aira reawakens her suppressed ability to see the supernatural, leading her to believe she was divinely chosen to exorcise demons.",
        "image_url": "https://dandadan.fandom.com/wiki/File:Aira_Shiratori.png"
      },
      {
        "id": 4,
        "name": "Jiji",
        "age": "16",
        "description": "Momo's childhood friend and first crush. After his house is haunted and possessed by the Evil Eye, he moves in with Momo and Seiko. He is considered an attractive and athletic jock but is actually an eccentric dork who views everyone in a positive light.",
        "image_url": "https://dandadan.fandom.com/wiki/File:Jiji.png"
      },
      {
        "id": 5,
        "name": "Seiko Ayase",
        "age": "Unknown",
        "description": "Momo Ayase's grandmother, an elderly and wise woman who often helps guide Momo and her friends in their supernatural encounters. She plays a crucial role in offering spiritual guidance to the family and providing assistance in matters involving the occult.",
        "image_url": "https://dandadan.fandom.com/wiki/File:Grandma_Ayase.png"
      },
      {
        "id": 6,
        "name": "Turbo Granny",
        "age": "Unknown",
        "description": "A youkai that used to appear at unexpected times and places, running rampant all over the country. Currently, she resides in Shono City Tunnel and is feared because she combines with a bound spirit.",
        "image_url": "https://dandadan.fandom.com/wiki/File:Turbo_Granny.png"
      },
      {
        "id": 7,
        "name": "Serpoians",
        "age": "Unknown",
        "description": "Male-only aliens that clone themselves to increase their number. They target human females to regain reproductive organs.",
        "image_url": "https://dandadan.fandom.com/wiki/File:Serpoians.png"
      },
      {
        "id": 8,
        "name": "Flatwoods Monster",
        "age": "Unknown",
        "description": "An alien that looks like a sumo wrestler and has large diamond-shaped gills. Agile, it unleashes sumo stomps and thrusts from a crouching position.",
        "image_url": "https://dandadan.fandom.com/wiki/File:Flatwoods_Monster.png"
      },
      {
        "id": 9,
        "name": "Acrobatic Silky",
        "age": "Unknown",
        "description": "Notable for her red dress and silky long hair, this yokai monster moves acrobatically. She has some connection to Aira.",
        "image_url": "https://dandadan.fandom.com/wiki/File:Acrobatic_Silky.png"
      },
      {
        "id": 10,
        "name": "Dover Demon",
        "age": "Unknown",
        "description": "Also known as a Mantisian. Always has 'dis' at the end of sentences. Powerful punches like a mantis shrimp and cute round eyes are his defining traits.",
        "image_url": "https://dandadan.fandom.com/wiki/File:Dover_Demon.png"
      }] });
});

// Arrancar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
