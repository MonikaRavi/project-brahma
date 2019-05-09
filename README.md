# Project Brahma

[live](https://haws-corporation.herokuapp.com) 

## Prerequisites

Make sure latest [angular-cli] installed globally. Follow [update-how-to](https://github.com/angular/angular-cli#updating-angular-cli)  

This project has dependencies that require **Node 4.x.x and NPM 3.x.x**.

For Windows users [git-bash](https://git-scm.com/downloads) is perfect **terminal**-window to manage nodejs projects. [1]
 
 
## Installation

1. Download and unpack
2. Run `npm i`. This may take a while. It may even *freeze* a bit on final steps - be patient. 
  * Also Remember, that npm on installing project dependencies may try to rebuild some modules (i.e *gyp*) and show scary red errors on that rebuild fails. Don't panic. If your `npm install` ends with long tree of project dependencies - then you are going right way. Nevermind deprecation WARNs. 

3. To start whole app template (this means a lot of initial compilation) in local dev server run
  * `npm run server`
  * or checkout *cookbook* section for some starting tips
4. Point your browser to [http://localhost:4200](http://localhost:4200)

#### tip 

##### Possible Error:

###### Missing jquery.color.js

Copy the code from [jquery](https://github.com/jquery/jquery-color/blob/master/jquery.color.js) into \node_modules\jquery-color\  as jquery.color.js

 
## NPM scripts
Checkout `scripts` section in `package.json` for tools launching shortcuts

 


## Build
* Run `npm run build` to build the project. 
* The build artifacts will be stored in the `dist/` directory. 
* checkout how excluding routes from *.routing.ts file reduces *.chunks.js count.
* dev build off app with dozen routes/pages takes comparatively acceptable time (~ 1 min)
* inspect built chunks, just to get idea how 
* Use the `npm run build:prod` for a production build.
* On huge app prod build may take more than 10 mins. On the final step it may look frozen completely. Be patient. Alocate at least 1Gb of free RAM. Consider to do some exersizes or tee while waiting.  
   * production code goes through optimizations, minifying, uglyfying, tree-shaking algorithm  -  but that's just price for nice chunked minimalist builds. 
   * there are some code rules, how to help tree-shacking compilers to do their [job](http://www.2ality.com/2015/12/webpack-tree-shaking.html)
    
#### tip 
write shell scripts for build/deploy/whatever routines automation

## resources
- [live project demo](https://haws-corporation.herokuapp.com)
- [angular-cli docs](https://github.com/angular/angular-cli)

