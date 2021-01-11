import express from 'express'
const app = express();
//const bodyParser = require("body-parser");

const port = 3000

app.get('/', (req, res) =>{
 res.send("Hello world!")
})



app.listen(port, () => {
    console.log(`Server running spritely on port ${port}`);
  });