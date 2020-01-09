var app = require('express')();
var socket = require('socket.io-client')('http://csichitkara.club');
var prendarr1=[];
var prendarr=[];
var month=[0,31,28,31,30,31,30,31,31,30,31,30,31];
socket.on('train',(dbdata)=>{
    
    var d = new Date();

    var dayNumber = d.getDay();
    

    var m=dbdata[0].date.toString().split('-');
    var costs=[];
    var sum=0;
    for(var i=0;i<dbdata.length;i++){
      sum+=dbdata[i].cst;
      costs.push(sum);
    }
    var xyz = month[m[1]]-m[0];
//    console.log("asdjasn"+xyz);
    console.log(costs);
    var days=[];
    for(var i=0;i<dbdata.length;i++){
      days.push(i);
    }
//  var days=dbdata.days;
    var {spawn} = require('child_process');
    console.log(days);
    
    var process = spawn('python', ["./tfmodel"+".py",
    xyz,
    costs,
    days
  ]);
   
  process.stdout.on('data', function (data) {
    var str = data.toString();
    console.log("string="+str);
    var result=str.substr(1).slice(0, -2);
    console.log(result);
    prendarr=result.split(", ");
    console.log("data="+prendarr[5]); 
    socket.emit("getPreArr",{arr: prendarr});
});
  process.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  process.on('close',(code)=>{
      console.log(`the child process exited with code ${code}`);
  })

});

socket.on('preddaywise',(data)=>{

    var xyz=30;
    var days=[];
    for(var i=0;i<data.result.length;i++){
      days.push(i);
    }
    var d = new Date();
    var dayNumber = d.getDay();
    var m=data.result[0].date.toString().split('-');
    var costs=[];
    var sum=0;
    for(var i=0;i<data.result.length;i++){
      sum+=data.result[i].cst;
      costs.push(sum);
    }
//  var days=dbdata.days;
    var {spawn} = require('child_process');
    console.log(data.data);
    var process1 = spawn('python', ["./daywise.py",
    dayNumber,costs,
    days,data.data.toString()]);
    process1.stdout.on('data', function (data) {
    var str = data.toString();
    console.log("string="+str);
    var result=str.substr(1).slice(0, -2);
    console.log(result);
    prendarr1=result.split(", ");
    console.log("Data to be emitted   ==   "+prendarr1);
    socket.emit('calanderData',{data:prendarr1});
    
    
});
process1.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  process1.on('close',(code)=>{
      console.log(`the child process exited with code ${code}`);
  })
  });
    

socket.on('pre',(data)=>{
  socket.emit("preDay",{cost:prendarr[data.day]});
});
//app.get("/pre",(req,res)=>{
//var dayno=req.body.day;
//    res.send(prendarr[dayno-1]);
//});
socket.on('prend',(data)=>{
  socket.emit("prend",{cost:prendarr[31]});
});
//app.get("/prend",(req,res)=>{
//    res.send(prendarr[31]);
//});
socket.on('getArray',()=>{
  socket.emit("arr",{prendarr});
});
//app.get("/getArray",(req,res)=>{
//    res.send(prendarr);
//});
//app.get("/train",(req,res)=>{
    // var dNO = req.body.dayNo; 
    // var costs=req.body.costs;
    // var days=req.body.days;
   
//})
console.log("Listening to port 3000");
app.listen(3000);