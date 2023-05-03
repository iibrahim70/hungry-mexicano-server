const express = require('express');
const app = express();
const port = process.env.PORT || 5000; 

app.get('/', (req, res) => {
  res.send('Mexicano is running');
}); 

app.listen(port, () => {
  console.log(`Mexicano API running on port ${port}`);
})
