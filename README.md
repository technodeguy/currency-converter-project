Instruction to set up and run the application. 
Install node js and npm
```sh
sudo apt install nodejs
sudo apt install npm
```
Make sure you've correclty installed npm and nodejs. 
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
Make sure redis-cli works. 
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

![First](https://github.com/user-attachments/assets/4895fcf9-0a8b-4f6b-9a48-c6c37fa49331)
![2](https://github.com/user-attachments/assets/ef5bd3d0-e04c-4a8d-b4c7-a35d547178ad)
![3](https://github.com/user-attachments/assets/3a5efa0a-fb60-4a2d-9764-613546f62d70)
