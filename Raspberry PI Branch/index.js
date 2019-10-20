var io = require('socket.io-client');
var Gpio = require('onoff').Gpio;

var LED1 = new Gpio(27, 'out'); //use GPIO pin 4 as output
var pushButton1 = new Gpio(22, 'in', 'rising',{debounceTimeout: 100});
var LED2 = new Gpio(9, 'out'); //use GPIO pin 4 as output

var pushButton2 = new Gpio(10, 'in', 'rising', {debounceTineout:100});

var socket = io.connect('http://csichitkara.club');
socket.on('connect', function () {
console.log('Connected');
  socket.emit('server custom event', { my: 'data' });
socket.emit('rpic', {status :'Connected'});
});
socket.on('rpiq', function(){
socket.emit('rpic', {status:'Connected'});
});


pushButton1.watch(function (err, value) { //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
  return;
  }

socket.emit('CMDToogle', {id:'GPIO-03'});
});


pushButton2.watch(function (err, value) { //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
  return;
  }

socket.emit('CMDToogle', {id:'GPIO-01'});
});


function unexportOnClose() { //function to run when exiting program
  LED1.writeSync(0); // Turn LED off
  LED1.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
};

socket.on('toogle', function(data){
console.log(data.id+" "+data.status);
if(data.id=='GPIO-01'&&data.status=='on')
{
	 LED2.writeSync(1);

new Gpio(4, 'out').writeSync(0);
}
else if(data.id=='GPIO-01'&&data.status=='off')
{
 LED2.writeSync(0);
	new Gpio(4, 'out').writeSync(1);
}


if(data.id=='GPIO-02'&&data.status=='on')
{
        new Gpio(2, 'out').writeSync(0);
}
else if(data.id=='GPIO-02'&&data.status=='off')
{
        new Gpio(2, 'out').writeSync(1);
}

if(data.id=='GPIO-03'&&data.status=='on')
{
        new Gpio(3, 'out').writeSync(0);
	 LED1.writeSync(1);
}
else if(data.id=='GPIO-03'&&data.status=='off')
{
	 LED1.writeSync(0);
        new Gpio(3, 'out').writeSync(1);
}



});
process.on('SIGINT', unexportOnClose);

