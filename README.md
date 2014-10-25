# Node-rest-starter generator

Node-rest-starter It is a simple node.js project generator that allows you to get started on developing REST services fast and easy. It's based on well known libs and frameworks such as [Express](https://github.com/strongloop/express), [Mongodb](http://www.mongodb.org/) for developing your endpoints and [Mocha](https://github.com/mochajs/mocha), [Chai](https://github.com/chaijs/chai) for testing purpose. [Logentries](https://logentries.com/) is used as a logging service.

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

## Folder structure
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
│   │     │   ├── access.js
│   │     │   ├── auth.js
│   │     │   ├── errors.js
│   │     │   ├── index.js
│   │     ├── models
│   │     ├── utils
│   │     │   ├── applyAuthentication.js
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
* `/source/middleware/access.js` - access validations for different users.
* `/source/middleware/auth.js` - validation for access token.
* `/source/middleware/error.js` - error logging.
* `/source/models` - data base models, such as: users, customers, payments, venues etc...
* `/utils/applyAuthentication.js` - patching express routes with authentication functions. More on that, please follow the good friend of mine and the author [Alexand Beletsky] (http://beletsky.net/2013/10/securing-express-dot-js-http-endpoints.html)



### Account creation


# License (MIT)

Copyright (c) 2014, 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.