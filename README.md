# Node-rest-starter

Node-rest-starter - is a simple node.js app skeleton that allows you fast and easy started on developing REST services. It's based on well known libs and frameworks such as [Express](https://github.com/strongloop/express), [Mongodb](http://www.mongodb.org/) for developing your endpoints. [Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai) for testing purpose. [Logentries](https://logentries.com/) is used as a logging service.

# Getting started

Clone the repo,

```bash
$ git clone git@github.com:julianusti/node-rest-starter.git
```

Install all dependencies that `node-rest-starter` use,

```bash
$ npm install
```

Run tests,

```bash
$ npm test
```

## Folder tree
```
├── node-rest-starter/
│   ├── config
│   │     ├── development.config.js
│   │     ├── production.config.js
│   │     ├── staging.config.js
│   │     ├── test.config.js
│   │     ├── index.js	
│   ├── source
│   │     ├── api
│   │     ├── db
│   │     ├── middleware
│   │     │   ├── errors.js
│   │     │   ├── index.js
│   │     ├── models
│   │     ├── utils
│   │     │   ├── logger.js
│   ├── test
│   │     ├── api
│   │     ├── common.js
│   │     ├── mocha.opts.js
│   │     ├── run.js
│   │     ├── utils.js
├── app.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .npmignore
├── .package.json
├── .README.md
```

* `/config` - contains app configurations, for development, production, staging and test environments, depends on NODE_ENV variable.
* `/source/api` - endponts of your app.
* `/source/middleware/error.js` - error logging.
* `/source/models` - data base models, such as: users, customers, payments, venues etc...
* `/utils/logger.js` - logentries wrapper.
* `/test/` - tests.


# Contribute

Clone the repo and make pull request.

```bash
$ git clone git@github.com:julianusti/node-rest-starter.git
```


# License (MIT)

Copyright (c) 2014, 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.