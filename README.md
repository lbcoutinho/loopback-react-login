# LoopBack & React Application

### LoopBack server Usage

From the root folder, install the dependencies

```sh
$ npm install
```

Setup your datasource in "server/datasources.json" and run the server

```sh
$ npm start
```

App:
http://localhost:3000
LoopBack explorer:
http://localhost:3000/explorer

### React client_src Usage 
This is the react source code.

Open a new terminal in the "client_src" folder

```sh
$ npm install -g create-react-app
```

From the "client_src folder" install client dependencies

```sh
$ npm install
```

To Serve client

 ```sh
$ npm start
```

This should start on port 3001

### Compile React client_src

From the "client_src" folder run

 ```sh
$ npm run build
```

This will put all static assets in the LoopBack "client" folder and update the main app