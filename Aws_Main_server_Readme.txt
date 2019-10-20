-------------------------Server Configuration--------------------------

Working LINK : http://www.csichitkara.club (our own domain)

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


6. Run the Provided code (index.js), make sure all modules/files are placed Properly
7. The Server runs on PORT 80 (443, SSL NOT Supported), go to your Server's IP on Browser
   And use the services. (Make sure to add 80 in inbound whitelist rules).
8. Replace <secret> <key> with your AWS SNS Credentails in aws.js||messasge.js

----------------------------POST INSTALLATIONS----------------------

1. USE CASES
	a. Turn ON/OFF the Devices.
	b. Add Remove devices on your own ease.
	c. Observer real time electricity usage.
	d. Go to reports and see usage history.
	e. observe graphs of real time usage
	f. search stats and tables
	g. use consumption LIMIT for each device.
	h. use Device CUSTOM TIMINGS (click on more).
	i. observe Bill Pridicted.
	j. go to calender sections watch daily usage and predicted everyday consumption.
	k. Custom SMS Notification on abnormal usage of electricity.
	l. Go to csichitkara.club/hostels || yourserverip/hostels for admin control over the building
	   used fro PN's and security personals.

---------------------------REFERENCE---------------------------------

1. www.aws.amazon.com
2. www.nodejs.org