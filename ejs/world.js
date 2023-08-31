const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const PORT = process.env.PORT || 3500;

app.use(bodyparser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
const a = [];

app.get('/', (req, res) =>{
    res.render('hello',{name:a});
});

// app.get('/', (req, res) =>{
//     res.render('hello');
// })

app.post('/', (req, res) =>{
    a.push(req.body.sname);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});