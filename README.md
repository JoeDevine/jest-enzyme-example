[![Build Status](https://travis-ci.org/JoeDevine/jest-enzyme-example.svg?branch=master)](https://travis-ci.org/JoeDevine/jest-enzyme-example)

# Jest with Enzyme Example

> This is an example project built to demonstrate using enzyme from [Airbnb](https://github.com/airbnb) with Jest.

## Usage

Run `npm install` after cloning this repository to download all the required packages for the project.

Run `npm start` to start the server locally:
```
npm start
```

The start script has a corresponding `prestart` script which will test and compile the code for you before starting the server. for full details, you can view the configuration in `package.json`.

## Jest Config

One of the powerful feature of Jest is that it automatically mocks dependencies as default. However, this means that we need to make sure we unmock enzyme in order to be able to use it successfully.
With this in mind, below is the Jest config required in `package.json`:

```

"jest": {
            ...

            "unmockedModulePathPatterns": [
               "./node_modules/react",
               "./node_modules/enzyme"
             ]
         }
    
```

## Project Structure

Overview

```
.
├── /__tests__/              # Folder containing tests
│
├── /client/                 # The source code of the application
│   ├── /components/         # React components
│   ├── /compiled.js         # Compiled react components generated using Browserify
│   ├── /index.html          # root HTML file for inject
│   └── /main.js             # Root react file used for compile
│
├── .babelrc                 # Contains Babel configuration
├── .eslintrc                # Contains ESLint configuration
├── .jscsrc                  # Contains JSCS configuration
├── .eslintignore            # Contains files to be ignored by ESLint
├── .gitignore               # Defines which files should not be backed up to git
├── package.json             # Contains the list of 3rd party libraries and utilities used, as well as all npm scripts to run the project
├── server.js                # Node server config file
├── setup-jasmine-env.js     # Jasmine Reporters config file
└── test-results.xml         # Code coverage report generated for CI
```

