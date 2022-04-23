# react-demo-app
Just a demo app for learning purposes


React is used to describe user interfaces. Hence react is declarative. 

Why react?

pros of using react:

-  can use "virtual browser" instead of DOM API which is a little harder.
- can be used for building mobile apps
- It's a declarative language (model UI and state)


In react, we used "components" to describe UI. Components are actually very similar to javascript functions.


Like functions, components have "inputs" and "outputs".
The inputs are:

- props (aka properties)
- state

And the outputs are:
- UI

components are reusable, and components can contain other components.

You simply call react components from within html code, using this html-like syntax:

```
<component />
```

I.e. we can embed components like a regular html element.

components can store private state data, for it's component's lifetime.

React is reactive, i.e. when the (private) "state" (input) changes, then the UI (output) changes as well.

This means, react works a bit like ajax, if you fill in some text fields, it can automatically show a preview elsewhere without need to refresh the page. 


We don't actually write any html code, javascript/react will automatically generate the html code for us. 

Instead we do write jsx code, that looks very similar to html code. This jsx is what component (functions) ends up returning. 


A react component can be written in the form of a:

- Function component
- Class component

But function component is recommended because it is relatively simpler.

A component accepts two input parameters:

- props (this contains fixed values)
- states (this is used to hold changing values)

This means components can make changes to states, but not props. 

and one return value. This value looks like a bit of html code, but it's actually a special syntax called jsx. 

React takes this jsx code and generates javascript code. This javascript code is what then get's processed by the web brower's builtin javascript engine, into html code.  


There's 2 ways to create a new react project.

1. create-react-app - https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
2. manually. 

### create-react-app approach

https://www.npmjs.com/package/create-react-app

There's 2 ways:

```
npm -i -g create-react-app
create-react-app 01-my-hello-world-app
```

but a better approach is:

```
npx create-react-app 01-my-hello-world-app
```

`npx` just downloads the latest `create-react-app` binary and uses it. npx always gets the latest version. So you don't have to worry about getting the latest version. Here's what the output looks like:

```

```

note: the "x" in `npm` means "execute", i.e. we want to execute a node package.  

```
npx create-react-app 01-my-hello-world-app

npx: installed 67 in 26.281s

Creating a new React app in /Users/sherchowdhury/github/react-demo-app/01-my-hello-world-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


> core-js@3.22.2 postinstall /Users/sherchowdhury/github/react-demo-app/01-my-hello-world-app/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js-pure@3.22.2 postinstall /Users/sherchowdhury/github/react-demo-app/01-my-hello-world-app/node_modules/core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

+ cra-template@1.2.0
+ react-scripts@5.0.1
+ react@18.0.0
+ react-dom@18.0.0
added 1366 packages from 618 contributors in 215.697s

174 packages are looking for funding
  run `npm fund` for details


Installing template dependencies using npm...
npm WARN deprecated source-map-resolve@0.6.0: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN @apideck/better-ajv-errors@0.3.3 requires a peer of ajv@>=8 but none is installed. You must install peer dependencies yourself.
npm WARN fork-ts-checker-webpack-plugin@6.5.1 requires a peer of typescript@>= 2.7 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

+ web-vitals@2.1.4
+ @testing-library/jest-dom@5.16.4
+ @testing-library/react@13.1.1
+ @testing-library/user-event@13.5.0
added 39 packages from 109 contributors in 13.735s

174 packages are looking for funding
  run `npm fund` for details

Removing template package using npm...

npm WARN @apideck/better-ajv-errors@0.3.3 requires a peer of ajv@>=8 but none is installed. You must install peer dependencies yourself.
npm WARN fork-ts-checker-webpack-plugin@6.5.1 requires a peer of typescript@>= 2.7 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

removed 1 package and audited 1404 packages in 6.077s

174 packages are looking for funding
  run `npm fund` for details

found 1 moderate severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details

Success! Created 01-my-hello-world-app at /Users/sherchowdhury/github/react-demo-app/01-my-hello-world-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd 01-my-hello-world-app
  npm start

Happy hacking!
```

this ends up creating the following folder and contents:

```
cd 01-my-hello-world-app
tree -I node_modules    

.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js

2 directories, 17 files
```

`-I` is to ignore the node_module's folder. 