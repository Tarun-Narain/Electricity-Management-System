Project LIVE AT : http://www.csichitkara.club



Raspberry Pi Configuration : 
```	
1. Burn Raspbian Stretch using win32diskimager
2. Place SSH File in boot drive.(Provided in Repo)
3. Place wpa_supplicant file with proper ssid and password of the access point.(provided in repo)
4. Boot up PI and use SSH to access (use IP scanner to find IP)
5. SSH to PI.
```
-----------------------------POST BOOT PROCEDURE---------------	<br>
```	
6. Install NVM In Raspberry pi	
	a. sudo apt-get update
	b. curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash 
	c. node -v(to confirm installation)
7. init your npm project (npm init)	
8. install onoff library, Socket.io-client, express
	a.  npm config set user 0 (AS ADMIN)
	b. npm config set unsafe-perm true (AS ADMIN)
9. use the Code index.js (RASPBERRY PI FOLDER/BRANCH)
```
<br>
-----------------------------PINOUTS AND CONNECTIONS-----------<br>
```
GND->relayGND->LED1GND->LED2GND<br>
GPIO-04->relayIN3<br>
GPIO-02->relayIN1<br>
GPIO-22->+BUTTON1<br>
GPIO-27->+BUTTON2<br>
GPIO-09->+LED1<br>
GPIO-07->+LED2<br>
5v->relayVCC->+BUTTON1->+BUTTON2
```
<br>
<br>
<br>


-------------------------Server Configuration--------------------------<br>
<br>
Working LINK : http://www.csichitkara.club (our own domain)<br>
<br>
```
1. Launch An Aws/GCP/Azure AMI/Ubuntu Server/LINUX Virtual Machine.
2. Install NVM in the machine (Look in references)
3. Install MYSQL Server in the machine (Look in References)
	a. Sudo service mysqld start (Or use systemctl)
4. npm init
5. Install The following Packages (npm i <packagename>)
	a. Express 
	b. Socket.io
	c. Mysql
	d. body-parser (deprecated)
3. aws-sdk
6. Run the Provided code (index.js), make sure all modules/files are placed Properly<br>
7. The Server runs on PORT 80 (443, SSL NOT Supported), go to your Server's IP on Browser<br>
   And use the services. (Make sure to add 80 in inbound whitelist rules).<br>
8. Replace <secret> <key> with your AWS SNS Credentails in aws.js||messasge.js<br>
```
<br>
----------------------------POST INSTALLATIONS----------------------<br>
```
1. USE CASES
	a. Turn ON/OFF the Devices.
	b. Add Remove devices on your own ease.
	c. Observer real time electricity usage.
	d. Go to reports and see usage history.
	e. observe graphs of real time usage
	f. search stats and tables
	g. use consumption LIMIT for each device.
	h. use Device CUSTOM TIMINGS (click on more).
	i. observe Bill Pridicted
	j. go to calender sections watch daily usage and predicted everyday consumption
	k. Custom SMS Notification on abnormal usage of electricity
	l. Go to csichitkara.club/hostels || yourserverip/hostels for admin control over the building
	   used fro PN's and security personals.
 ```
 <br>
 MAKE SURE AWS NODE SERVER IS ALREADY DEPLOYED----------<br>


-------------------------Server Configuration--------------------------<br>

Working LINK : http://www.csichitkara.club (our own domain)<br>
```
1. Launch An Aws tensorflow LINUX Virtual Machine. (Deep Learning AMI (AMAZON LINUX 2) version 24.2 )
2. Install NVM in the machine (Look in references)
	Python is already Installed
4. npm init
5. Install The following Packages
	a. Express 
	b. Socket.io
	(Make sure you clone the files provided (*.py))
6. Run the Provided code (x.js), make sure all modules/files are placed Properly
7. The Server runs on PORT 80 (443, SSL NOT Supported), go to your Server's IP on Browser
   And use the services. (Make sure to add 80 in inbound whitelist rules).
8. REPLACE  csichitkara.club with your own IP of Node (can be used for testing)
```
<br>
-----------------------------------------------------------------------<br>


<br>
<br>
---------------------------References And Links-----------------<br>
```
a. https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp
b. https://www.raspberrypi.org/blog/raspbian-stretch/
c. https://www.npmjs.com/package/onoff
d. www.aws.amazon.com
e. www.nodejs.org
```
<br>
