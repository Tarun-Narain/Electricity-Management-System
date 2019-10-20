Raspberry Pi Configuration : 
	
	1. Burn Raspbian Stretch using win32diskimager
	2. Place SSH File in boot drive.(Provided in Repo)
	3. Place wpa_supplicant file with proper ssid and password of the access point.(provided in repo)
	4. Boot up PI and use SSH to access (use IP scanner to find IP)
	5. SSH to PI.
-----------------------------POST BOOT PROCEDURE---------------	
	6. Install NVM In Raspberry pi		
		a. sudo apt-get update
		b. curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
		c. node -v(to confirm installation)
	7. init your npm project (npm init)	
	8. install onoff library, Socket.io-client, express 
		a.  npm config set user 0 (AS ADMIN)
		b. npm config set unsafe-perm true (AS ADMIN)
	9. use the Code index.js (RASPBERRY PI FOLDER/BRANCH)

-----------------------------PINOUTS AND CONNECTIONS-----------
GND->relayGND->LED1GND->LED2GND
GPIO-04->relayIN3
GPIO-02->relayIN1
GPIO-22->+BUTTON1
GPIO-27->+BUTTON2
GPIO-09->+LED1
GPIO-07->+LED2
5v->relayVCC->+BUTTON1->+BUTTON2
---------------------------References And Links-----------------
	a. https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp
	b. https://www.raspberrypi.org/blog/raspbian-stretch/
	c. https://www.npmjs.com/package/onoff