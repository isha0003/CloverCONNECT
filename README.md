# CloverCONNECT - Chat Application 
CloverCONNECT is chat application build using MERN Stack.


![login page](./images/1.png)
![registration page](./images/3)
![home page](./images/2)

## Installation Guide

### Requirements
- [Nodejs]
- [Mongodb]

```shell
git clone https://github.com/koolkishan/chat-app-react-nodejs
cd chat-app-react-nodejs
```
Now rename env files from .env.example to .env
```shell
cd public
mv .env.example .env
cd ..
cd server
mv .env.example .env
cd ..
```

Now install the dependencies
```shell
cd server
yarn
cd ..
cd public
yarn
```
We are almost done, Now just start the development server.

For Frontend.
```shell
cd public
yarn start
```
For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
```shell
cd server
yarn start
```

Done! Now open localhost:3000 in your browser.
