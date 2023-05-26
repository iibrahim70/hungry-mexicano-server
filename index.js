const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000; 

const recipe = require('./data/data.json')

app.use(cors()); 

app.get('/', (req, res) => {
  res.send('Mexicano is running');
}); 

app.get('/recipe', (req, res) => {
  res.send(recipe)
})

app.get('/recipe/:id', (req, res) => {
  const id = parseInt(req.params.id); 
  const selectedRecipe = recipe.find(n => n.id === id);
  res.send(selectedRecipe);
})

app.listen(port, () => {
  console.log(`Mexicano API running on port ${port}`);
})
