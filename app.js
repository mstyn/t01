﻿//Modules
var express = require("express");
var app = express();
var MongoStore = require('connect-mongo')(express);
var dbsettings = require('./config').settings; //Server configuration
global.saldo = 'fewfwef352tFRWEQF';
global.controllers = require('./controllers'); //Controllers
var routers = require('./routers'); //Routers
var viewEngine = 'ejs'; 

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', viewEngine);
  /*---------------------------------------------------*/
  app.use(express.cookieParser());
  /* app.use(express.logger("dev")); */
  app.use(express.session({ 
      secret: 'fegwegwe',
      store: new MongoStore(dbsettings),
      cookie: { path: '/', httpOnly: true, maxAge: 1000*60*60*24 }
    }));
  /*---------------------------------------------------*/
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.get('/',routers.index); //Стартовая страница
app.post('/auth/register',routers.auth.register); //Регистрация пользователей
app.post('/auth',routers.auth.login); //Вход на сайт
app.get('/auth',routers.auth.getlogin); //Проверить состояния входа: залогинился или нет
app.del('/auth',routers.auth.logout); //Выход с сайта

//Connect to db and start
global.controllers.db.opendb(dbsettings, function(error,db){
    if (!error){
        global.db = db;
        var port = process.env.PORT || 5000;       
		app.listen(port)                           // Запускаем сервер на 5000 порту, если не указана переменная окружения "port" 
		console.log("Listening at " + port)        // Пишем в консоль, что запустились
    } else console.log('Error connect to db');
});