# Brief Deployment Notes (Azure)

- Log into https://portal.azure.com, Create a VM (using Ubuntu 16.04 LTS as example below)
- Log into VM, and install necessary packages for running Laravel

```
sodu apt-get update

sudo apt-get install apache2
sudo a2enmod ssl
sudo a2enmod headers
sudo a2enmod rewrite
sudo service apache2 restart

sudo apt-get install php libapache2-mod-php php-xml php-mbstring php-curl

sudo apt-get install mysql-server mysql-client php-mysql

sudo apt-get install unzip
sudo apt-get install git
sudo apt-get install composer
```

- Obtain a temporary SSL certificate at https://www.sslforfree.com
- Configure Apache2 to use SSL certificate on the intended domain/sub-domain
- Refer to [Download and run this project](docs/download-and-run-this-project.md), then either rename the cloned directory to the DocumentRoot specified in Apache2 configuration file, or modify Apache2 configuration to point DocumentRoot to the cloned directory (set up directory and file permissions properly)

Restart apache2 again if necessary, and visit the intended domian/subdomain to see deployed demo app.

 
 