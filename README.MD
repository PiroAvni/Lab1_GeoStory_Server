<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#GeoStory">About The Project</a>
    </li>
    <li><a href="#Installation">Installation </a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#technologies">Technologies</a></li>
    <li><a href="#process">Process</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#wins & Challenges">Wins & Challenges</a></li>
    <li><a href="#contribution">Contribution</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


![alt text](https://github.com/PiroAvni/Lab1_GeoStory_Server/blob/main/LOGO.png "GeoStory")


<!-- ABOUT THE PROJECT -->
# GeoStory 

An interactive game to encourage pupils to engage more in a non-STEM subject.
GeoStory is a geography game which takes you on a journey through out the world and challenges you ability to recognise the displayed locations while at the same time providing you some historical facts.

<!-- Installation & usage -->
## Installation

To get started, clone the repository through the command line (`git clone git@github.com:PiroAvni/Lab1_GeoStory_Client.git`). 

Once cloned, install the dependencies for the repo by running the following commands (you do _not_ have to run the first command if your command line is already inside the newly cloned respository):


```
cd Lab1_GeoStory_Client

npm i

```
To run the code locally, type  `npm run dev` in the terminal.

The server will be running on [!]`http://localhost:3000/`(http://localhost:3000/)


## Usage

 To access the live data for each continent the following  End-point are:

1. https://geostory-server.onrender.com/Africa/Random
2. https://geostory-server.onrender.com/North_Americas/random
3. https://geostory-server.onrender.com/South_Americas/random
4. https://geostory-server.onrender.com/Asia/random
5. https://geostory-server.onrender.com/Europe/random
6. https://geostory-server.onrender.com/Oceania/random
7. https://geostory-server.onrender.com/Africa/Random


 #### A Side Note:

> #### Scripts
>This page is specific to the scripts in the package.json file; what they do and why we have them.
>
>Running locally
>To run the template locally, `run npm run dev`.
>
>When this command is run, it will make use of code within the dev-scripts folder.
>



## Demo
![Demo](https://github.com/PiroAvni/Lab1_GeoStory_Server/blob/main/Demo.gif "Demo")


# Technologies

The technologies used to build the backend server:

* [![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/)
* [![nodejs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en)
* [![expressjs](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
* [![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
* [![postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)](https://www.postman.com/) (Testing the API End-Points)
* [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
- Nodemon
 - Json
 - CRUD (Operations to create, access data)
 - render.com

# Process

Data was collected on the all continents with  images for the json files.

All data was save in the Json files.

Once Nodejs and Express.js was installed, the following code was added:

index.js

The following code 
```js
const app = require('./app');
const port = 3000

app.listen(port, () => {
    console.log(`API listening on port ${port}.`);
})
```
In the app.js file 
  
```js
const express = require("express");
const app = express();

// Home ( End-Point)
app.get("/", (req, res) => {
  res.send("Welcome to the GeoStory API!");
});

module.exports = app;
```

An Example of one of our end-points to access and send data from our Json file:

```js
// Africa
app.get("/Africa", (req, res) => {
  !africa 
    ? res.status(404).json({ message: `No Data was found` })
    : res.send(africa);
});

```

## Testing

Using Postman test and Automation, test script were ran to make sure the end-points were working as expected. 

```js
pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.collectionVariables.get("variable_key");
```
![Test](https://github.com/PiroAvni/Lab1_GeoStory_Server/blob/main/GeoStory_API_tests.png "Test")



## Wins & Challenges

 ### Challenges


* The challenge was the research and the data collection for our json files.

* Difficulty implementing validation for the end-point to display status code error messages.

 ### Wins

 * Implementing an end-point which would randomise the data from json file and implementing validation that would send an error message to the user.

The code below shows how we implemented those challenges:

```js
app.get("/Africa/random", (req, res) => {
  console.log(req.params);
  const randAfrica = Math.floor(Math.random() * africa.length);
  console.log(randAfrica);

  !randAfrica === undefined
    ? res.status(404).json({ message: `No Data was found` })
    : res.send(africa[randAfrica]);
});
```

## Contribution 

[![Avni Piro] (https://github.com/PiroAvni)]

Nicola French 

Mithurssan Santhirakumar

Daniel Ogsunsanya

## Licence

MIT License:  see [the `LICENSE` file](https://github.com/PiroAvni/Lab1_GeoStory_Server/blob/main/LICENSE).

