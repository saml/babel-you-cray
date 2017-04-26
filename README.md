- App uses Context
- Context uses Factory
- Factory uses App

Completing a cycle. Node can handle cycle. But, not babel-register.

```
$ npm install
$ mocha --compilers js:babel-register test/index.js
```
