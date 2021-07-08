const express = require('express');
//const request = require('request');
const path = require('path');
const router = express.Router();

const app = express();
const PORT = process.env.PORT || 3000;
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);
app.listen(PORT, () => console.log(`listening on ${PORT}`));