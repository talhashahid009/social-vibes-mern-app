# social-vibes-mern-app

A full stack web application build on MERN stack which is short form of Mongo, Express, React and NodeJS. This is a simple social web app as where user can login and signup with google or his own email. A homepage where social posts of everyone are rendered. This app is following authentication mechanism using [OAUTH](https://datatracker.ietf.org/doc/html/rfc6749) and [JSON Web Token](https://datatracker.ietf.org/doc/html/rfc7519). The frontend and backend APIs are following [RESTful](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) pattern. A user can create his/her social post and can edit or delete the only posts that represent him/her as creator. One can like posts of anyone even his own posts also.

## Environment and Technologies

- [NodeJS](https://nodejs.org/en/about/)
    - NodeJS is a JavaScript runtime environment.
    - It is open source and support cross-platform.

- [Express](https://expressjs.com/)
    - A web framework for [NodeJS] which allows server to utilize build-in http module. 

- [REACT](https://reactjs.org/)
    - A JavaScript library for building interactive user interface. It makes easier to build and mantian complex projects beacause of its component capability.

- [REDUX](https://redux.js.org/)
    - A JavaScript library that is used for state management on frontend side. It makes easier to manage state by centaralizing the state logic.

- [MongoDB](https://www.mongodb.com/atlas/database)
    - An open source NoSQL database. Data is stored in JSON-like documents also called collections. We have MongoDB Atlas which is cloud version of mongodb. 

## Instructions to run on local

- Go to a directory where you want to add this repository.
- Open CMD or Git Bash or anyother terminal.
- Clone the repository by entring below command on your terminal
```bash
$ git clone https://github.com/talhashahid009/social-vibes-mern-app.git
```
- Go inside the cloned directory
```bash
$ cd \social-vibes-mern-app
```
- Go inside client and server directly and run command
```bash
$ npm install
```
- Add a new file name `.env` at root folder of client directory.
- Inside this `.env` file add variable 
```bash
REACT_APP_BASE_URL = 'URL of your server'
```
- Add a new file name `.env` at root folder of server directory.
- Inside this `.env` file add variable 
```bash
PORT = 'PORT on which you want to run your local host e.g. 4000'
CONNECTION_URL = 'URL of your local mongodb or mongodb-atlas' 
SECRET = 'Any string that you want to use for token'
```
- Here are instructions to start with [MongoDB Atlas](https://www.mongodb.com/docs/atlas/getting-started/)
- The command to run client and server is same
```bash
$ npm start
```

### Running server for dev

- To run server for development mode make a small change in package.json of server directory.
- Go to package.json file. Replace start script with following:
```bash
"start": "nodemon index.js"
```
- Now you don't have to restart server on any change. It will restart automatically.