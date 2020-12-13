const express=require('express');
const app=express();
const server=require('http').Server(app);
//const session = require('express-session');
//const cookieParser=require('cookie-parser');


/*app.use(session({
	secret:'12345',
	name:'testapp',
	cookie:{maxAge:80000},
	resave:false,
	saveUninitialized:true,
}));*/

app.use(express.static(__dirname+'/public'));

app.get('/homepage.html', (req, res)=>{
	res.sendFile(__dirname+'/homepage.html');
});

app.get('/gallery.html', (req, res)=>{
	res.sendFile(__dirname+'/gallery.html');
});

app.get('/GameRoomList.html', (req, res)=>{
	req.session.isGuestOrHost='guest';
	res.sendFile(__dirname+'/GameRoomList.html');
});

server.listen(80, ()=>{
	console.log('start');
});
