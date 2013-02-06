var express = require('express');
var app = express();

app.configure(function() {
    app.engine('html', require('uinexpress').__express) // Используем функцию "template" библиотеки underscore для рендеринга
    app.set('view engine', 'html')                      
    app.set('views', __dirname + "/tpl");
    app.set("view options", {layout: 'layout.html'});   // Файл layout.html по умолчанию будет оборачивать все шаблоны
    app.use(express.static(__dirname + "/public"));     // Делаем файлы из папки public доступными на сайте
});

app.get('/', function(req, res){          // Обрабатываем запрос корневой страницы "/"
    res.render('index.html');
	
});
app.get('/profile', function(req, res){ // Обрабатываем запрос страницы "/profile"
    res.render('profile.html');
	
});
app.get('/registr', function(req, res){ // Обрабатываем запрос страницы "/profile"
    res.render('registr.html');
	
});
app.get('/entry', function(req, res){ // Обрабатываем запрос страницы "/profile"
    res.render('entry.html');
	
});
app.get('/portfolio', function(req, res){ // Обрабатываем запрос страницы "/portfolio"
    res.render('portfolio.html');
	
});
app.get('/sethelp', function(req, res){ // Обрабатываем запрос страницы "/portfolio"
    res.render('sethelp.html');
	
});
app.get('/gethelp', function(req, res){ // Обрабатываем запрос страницы "/portfolio"
    res.render('gethelp.html');
	
});
app.get('/structure', function(req, res){ // Обрабатываем запрос страницы "/portfolio"
    res.render('structure.html');
	
});
app.get('/history', function(req, res){ // Обрабатываем запрос страницы "/portfolio"
    res.render('history.html');
	
});

var port = process.env.PORT || 5000;       
app.listen(port)                           // Запускаем сервер на 5000 порту, если не указана переменная окружения "port" 
console.log("Listening at " + port)        // Пишем в консоль, что запустились