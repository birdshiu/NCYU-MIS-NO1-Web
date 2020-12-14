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

app.get('/', (req, res)=>{
	res.sendFile(__dirname+'/Index.html');
});

app.get('/Gallery.html', (req, res)=>{
	res.sendFile(__dirname+'/Gallery.html');
});

app.get('/Adventure.html', (req, res)=>{
	res.sendFile(__dirname+'/Adventure.html');
});

app.get('/Member.html', (req, res)=>{
	res.sendFile(__dirname+'/Member.html');
});

app.get('/AboutFanlu.html', (req, res)=>{
	res.sendFile(__dirname+'/AboutFanlu.html');
});

server.listen(80, ()=>{
	console.log('start');
});
