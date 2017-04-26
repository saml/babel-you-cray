
```
$ npm install
$ ./node_modules/.bin/babel src/ --our-dir dist/
$ node goodcase.js 
App {}
App {}
App {}
$ node dist/testcase.js 
/home/saml/code/src/github.com/saml/babel-you-cray/dist/Factory.js:26
			return new _App2.default();
			       ^

TypeError: _App2.default is not a function
    at Function.create (/home/saml/code/src/github.com/saml/babel-you-cray/dist/Factory.js:26:11)
    at Object.<anonymous> (/home/saml/code/src/github.com/saml/babel-you-cray/dist/Factory.js:34:57)
    at Module._compile (module.js:409:26)
    at Object.Module._extensions..js (module.js:416:10)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Module.require (module.js:353:17)
    at require (internal/module.js:12:17)
    at Object.<anonymous> (/home/saml/code/src/github.com/saml/babel-you-cray/dist/Context.js:9:16)
    at Module._compile (module.js:409:26)
```
