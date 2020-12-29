var express = require('express');
var fs = require('fs');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));   

fs.readFile('README.txt', 'utf8', function(err, data) {
    console.log(data);
});

app.get('/', function(req, res){
    res.render('index');
});    
app.get('/contact', function(req, res){ 
    res.render('contact', {qs: req.query});
});  
app.get('/dashboard', function(req, res){
    console.log(req.query);
    res.render('dashboard');
});
app.get('/form8', function(req, res){
    console.log(req.query)
    res.render('form8', {title: 'Sup', message: 'Mutter Mssg', qs: req.query});
});  
app.get('/profile/:name', function(req, res){
    var data = {age: 298, job: 'ninja', hobbies: ['kamehameha', 'heyuken', 'get-over-here']};
    console.log(req.params.name);
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
console.log('You have an ejs app listening on port 3000');