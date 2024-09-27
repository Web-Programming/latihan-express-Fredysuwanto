// const http = require('http');

const express = require('express');
const app = express();
const port = 3000;

//route get
// app.get('/', (req, res)=> {
//     res.send('Hello,Get Request! ');
// });

//middleware untuk parsing body request
app.use(express.json());

//route post
app.post('/submit', (req,res)=> {
    const{name} = req.body;
    res.send(`hello, ${name}`);
});
//serving static file
app.use(express.static('public'));
    
app.listen(port, ()=>{
    console.log('Server running at http://localhost:3000/');
});

app.get('/text', (req, res)=> {
    res.send('ini adalah response text');
});
app.get('/html', (req, res)=> {
    res.send('<h1>ini adalah response html </h1>');
});
app.get('/json', (req, res)=> {
    res.send('Ini adalah response JSON ');
});
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');
// });

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });
