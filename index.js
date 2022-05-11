const express = require('express')
import fetch from ('node-fetch');
const app = express()

const url='https://jsonplaceholder.typicode.com/todos';

let settings = { method: "Get" };

fetch(url, settings)
.then(res => res.json())
.then((json) => {
    console.log(json)
});

app.listen(3000,()=>{
    console.log("The server is running on the port 3000")
})