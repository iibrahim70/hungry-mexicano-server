const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000; 

const recipe = require('./data/data.json')

app.use(cors()); 

app.get('/', (req, res) => {
  res.send('Mexicano is running');
}); 

app.get('/recipes', (req, res) => {
  res.send(recipe)
})

app.listen(port, () => {
  console.log(`Mexicano API running on port ${port}`);
})
