<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#GeoStory">About The Project</a>
    </li>
    <li><a href="#Installation">Installation </a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#Technologies">Technologies</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
# GeoStory 

An interactive game to encourage pupils to engage more in a non-STEM subject.
GeoStory is a geography game which takes you on a journey through out the world and challenges you ability to recognise the displayed locations while at the same time providing you some historical facts.

<!-- Installation & usage -->
# Installation



## Installation

To get started, clone the repository through the command line (`git clone git@github.com:PiroAvni/Lab1_GeoStory_Client.git`). 

Once cloned, install the dependencies for the repo by running the following commands (you do _not_ have to run the first command if your command line is already inside the newly cloned respository):


```
cd Lab1_GeoStory_Client

npm i

```


## Usage

 The following end End-point to access the data are:

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
* [![postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)](https://www.postman.com/)
* [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
- Nodemon
 - Json
 - Postman (Testing the API End-Points)
 - CRUD (Operations to create, access data)
 - render.com

# Process

 Task to collect all the data on the continents and images for the json files.
 All data was save in the Json files.

index.js

The following code 
```js
const app = require('./app');
const port = 3000

app.listen(port, () => {
    console.log(`API listening on port ${port}.`);
})
```








## FAQ
Please see [our faq](https://github.com/reZach/secure-electron-template/blob/master/docs/faq.md) for any common questions you might have.
**NEW TO ELECTRON?** Please visit [this page](https://github.com/reZach/secure-electron-template/blob/master/docs/newtoelectron.md).







)
[Javascript-url]: