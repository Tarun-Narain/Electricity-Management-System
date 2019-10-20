var express=require('express');
var app=express();
var http = require('http').createServer(app);
var bodyParser = require('body-parser');
var io = require('socket.io')(http);
var services = require('./services');
var message = require('./message.js');
app.set('view engine', 'ejs');
app.use(express.static('public'));


class Switch{
constructor( name, power, id, status){
this.id=id; 
this.name = name;
this.status=status;
this.power = power;
this.CTE=0; 
this.TTE=0;
this.cost=0;
this.from=0;
this.to=0;
this.notify=0; 
}
}
var switches=[];
var prediction =[];
var switch1=new Switch('Charger', '3.5', 'GPIO-03', 'off');
switches.push(switch1);
app.post('/removeDevice',bodyParser.urlencoded({ extended: false }), function(req, res){
console.log(req.body);
var x;
for(x in switches){
if(switches[x].id==req.body.id){
switches.splice(x,1);
}
}

res.json({status : 'reload'});
});
app.get('/', function(req, res){
res.render('test2', {switches});
});
app.get('/test', function(req, res){
services.dbinsert('select date, sum(cost) as cst from billusage group by date having date like ? ', ['%-9-2019'], function(result){
io.emit('train', result);
res.json(prediction);
});
});
app.get('/hostels', function(req, res){
res.render('hostels', {switches});
});
app.get('/calender', function(req, res){
services.dbinsert('select date, sum(cost) as cst from billusage group by date',[],function(data){
console.log('req calender');
console.log(data);
res.render('calender', {data:data});
});
});
function requestTrain()
{
services.dbinsert('select date, sum(cost) as cst from billusage group by date',[], function(result){
console.log("requested train");
io.emit('train', result);	
});
}
setInterval(requestTrain,7200000);
app.get('/reports', function(req, res){
res.render('reports', {switches});
});
app.get('/test2', function(req, res){
res.json(prediction);
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('getThirty', function(){
	  if(prediction.length==0)
		  requestTrain();
        else
	  io.emit('trainedData',prediction);
	  });
socket.on('getArray', function(data){

services.dbinsert('select date, sum(cost) as cst from billusage group by date' ,[], function(result){
console.log("requested train");
io.emit('preddaywise', {data:data,result:result});
});

});
socket.on('getBillNow',function(data){
console.log(data);
services.dbinsert('select sum(cost) as cst from billusage where date like ? ', ['%-9-2019'], function(result){
console.log("requested billnow");
io.emit('BillNow', result[0].cst);
});

});
  socket.on('getPreArr', function(data){console.log('trained data');prediction=data.arr; io.emit('trainedData', prediction);console.log(prediction[30]);});
  socket.on('rpiq', function(data){io.emit('rpiq', {});console.log('req rspi');});
  socket.on('rpic', function(data){io.emit('rpic', {status : "Connected", switches:switches});});
  
  socket.on('settime', function(data){
	  console.log(data.id+" "+data.from+" "+data.to);
	  for(var i=0;i<switches.length;i++)
	  {
		  if(switches[i].id==data.id){
		  switches[i].from=data.from;
		  switches[i].to=data.to;
		  }
	  }
  });
  
	socket.on('CMDToogle', function(data){
	console.log('toogle');
	for(var i=0;i<switches.length;i++)
	{
 console.log(data.id+" "+switches[i].id);
		if(switches[i].id==data.id)
		{
			if(switches[i].status=='on'){switches[i].status='off'; dbinsert(switches[i]); io.emit('toogle', {id:switches[i].id, status:switches[i].status});}
		else	if(switches[i].status=='off'){switches[i].status='on';switches[i].CTE=0;io.emit('toogle', {id:switches[i].id, status:switches[i].status});}
		   break;
		}
	}

});
socket.on('findRecord', function(data){
console.log(data.month+" "+data.year);
services.dbinsert('select date, sum(cost) as cst from billusage group by date having date like ? ', ['%'+data.month+'-'+data.year], function(result){
console.log(result);
io.emit('History', result);
});

});
socket.on("addDevice", function(data){
var x=new Switch(data.name,data.power, data.gpio, 'off');
console.log('Device Added' + data.name+" "+data.power+" "+data.gpio  );
switches.push(x);

});
socket.on('getHistory', function(){
services.dbinsert('select * from billusage order by sno desc', function(err ,result){
console.log(result);
io.emit('History', result);
});

});
socket.on('setNotify', function(data){
	console.log(data.id+' '+data.notify);
	for(var i=0;i<switches.length;i++){
		if(switches[i].id==data.id)
			switches[i].notify=data.notify;
	}
	
});

});

function dbinsert(x)
{
var currentTime = new Date();
var currentOffset = currentTime.getTimezoneOffset();
var ISTOffset = 330; 
var ISTTime = new Date(currentTime.getTime() );

var CTES=new Date(Date.now()-x.CTE*1000 + (ISTOffset + currentOffset)*60000)
var CTEE=new Date(Date.now() + (ISTOffset + currentOffset)*60000);
var CTESs=CTES.getDate()+"-"+(CTES.getMonth()+1)+"-"+CTES.getFullYear()+" ("+CTES.getHours()+":"+CTES.getMinutes()+":"+CTES.getSeconds()+")";
var CTEEs=CTEE.getDate()+"-"+(CTEE.getMonth()+1)+"-"+CTEE.getFullYear()+" ("+CTEE.getHours()+":"+CTEE.getMinutes()+":"+CTEE.getSeconds()+")";
var datel=CTEE.getDate()+"-"+(CTEE.getMonth()+1)+"-"+CTEE.getFullYear();
var cost=( +x.power/1000)*( +x.CTE/3600);
services.dbinsert('insert into billusage(name, rpin, CTES, CTEE,TE, power, date, cost) values(?,?,?,?,?,?,?,?)', [x.name, x.id, CTESs, CTEEs,x.CTE,x.power,datel,cost], function(err){});

}

setInterval(function(){

for(var i=0;i<switches.length;i++){
switches[i].status=='on'? (switches[i].TTE= +switches[i].TTE+1,switches[i].CTE = +switches[i].CTE+1):false;

if(switches[i].status=='on'&&switches[i].notify!='0')
{
	var x=parseFloat(switches[i].notify);
	console.log(x+" "+ +switches[i].power*( +switches[i].TTE));
// int y=parseFloat(switches[i].power)*parseFloat(switches[i].power);
	if(x <= +(switches[i].power/1000)*( +(switches[i].TTE)/3600)*5){
 switches[i].status='off'; dbinsert(switches[i]); io.emit('toogle', {id:switches[i].id, status:switches[i].status});
		io.emit('notification', switches[i]);
message.send(switches[i].name, switches[i].cost);
console.log('notification sent');
	}
}


if(switches[i].from!='0'&&switches[i].to!='0'){
		var currentTime = new Date();
var currentOffset = currentTime.getTimezoneOffset();
var ISTOffset = 330; 
var ISTTime = new Date(currentTime.getTime() );

		var d=new Date(Date.now()+(ISTOffset + currentOffset)*60000);
		
		
		
		d.setHours(switches[i].from.split(':')[0]);
		d.setMinutes(switches[i].from.split(':')[1]);
		var nn=new Date(Date.now()+(ISTOffset + currentOffset)*60000);
		var d2=new Date(Date.now()+(ISTOffset + currentOffset)*60000);
		d2.setHours(switches[i].to.split(':')[0]);
		d2.setMinutes(switches[i].to.split(':')[1]);
		if(switches[i].status=='off'&&d.getTime()/1000==nn.getTime()/1000){
			switches[i].status='on';
      switches[i].CTE=0;
			io.emit('toogle', {id:switches[i].id, status:switches[i].status});
		}
		
		 if(switches[i].status=='on'&&d2.getTime()/1000==nn.getTime()/1000){
			switches[i].status='off';
			io.emit('toogle', {id:switches[i].id, status:switches[i].status});
		}
	switches[i].cost= (+(switches[i].power/1000)*(+switches[i].TTE/3600)*5).toString() ;
}

}
io.emit('update', switches);

var sum=0;
for(var i=0;i<switches.length;i++){
	sum=switches[i].status=='on'?sum+ +switches[i].power:sum;
	//console.log(sum);
}

io.emit('grapher', sum/1000);

}, 1000);

http.listen(80, function(){
  console.log('listening on *:80');
});



