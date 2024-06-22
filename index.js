//CONFIG
const config = require("./config.json")
const PORT = config.port|| 3000;
//NODE PACKAGE
const express = require('express')
const app = express();


app.listen(PORT, () => {
    console.log(`server listening on the port ${PORT}`);
    console.log(config)
  });
