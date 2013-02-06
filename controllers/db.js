exports.opendb = function(settings, callback){    
    var mongo = require('mongodb'),
      Server = mongo.Server,
      Db = mongo.Db;
    
    /* var server = new Server(settings.host, settings.port, {auto_reconnect: settings.auto_reconnect});
    var db = new Db(settings.db, server); */
	
	var server = new Server('linus.mongohq.com', 10050, {auto_reconnect: true});
    var db = new Db('my01', server);
    
    db.open(function(err, db) {
      if(!err) {
        db.authenticate('mstyn', 'mstyn04', function(){callback(false, db);});
      } else callback(true, db);
    });    
};

exports.criptpassword = function(string){
    var crypto = require('crypto');
    return crypto.createHash('md5').update(string+global.saldo).digest("hex");
};