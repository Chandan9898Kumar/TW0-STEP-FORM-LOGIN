# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:




### To Hide Source File from browser.


`Keep these two in package.json's script: -  `

"build": "GENERATE_SOURCEMAP=false react-scripts build",
"winBuild": "set \"GENERATE_SOURCEMAP=false\" && react-scripts build",

`1.   Use "npm run build" for creating build on Linux.`

`2.   Use "npm run winBuild" for creating build on Windows.`