Instruction to set up and run the application
Install node js and npm
```sh
sudo apt install nodejs
sudo apt install npm
```
Make sure you've correclty installed npm and nodejs
Install redis by executing these commands
```sh
sudo apt update
sudo apt install redis-server
sudo systemctl restart redis.service
sudo systemctl status redis
```
Status of redis should be active, if no, run 
```sh
sudo systemctl start redis
```
Make sure redis-cli works 
Install redis desktop
```sh
sudo snap install another-redis-desktop-manager
```
Run the application 
```sh
npm run start
```
Ultimately, go to postman and trigger the endpoint via POST request
```sh
http://localhost:3000/currency POST
```
Convert currencies!