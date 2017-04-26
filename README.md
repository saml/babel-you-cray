- App uses Context
- Context uses Factory
- Factory uses App

Completing a cycle. Node can handle cycle. But, not babel-register.

```
$ npm install
$ mocha --compilers js:babel-register test/index.js
/home/saml/code/src/github.com/saml/babel-you-cray/src/Factory.js:26
			return new _App2.default();
			       ^

TypeError: _App2.default is not a function
    at Function.create (/home/saml/code/src/github.com/saml/babel-you-cray/src/Factory.js:5:10)
    at Object.<anonymous> (/home/saml/code/src/github.com/saml/babel-you-cray/src/Factory.js:9:40)
    at Module._compile (module.js:409:26)
    at loader (/home/saml/code/src/github.com/saml/babel-you-cray/node_modules/babel-register/lib/node.js:144:5)
    at Object.require.extensions.(anonymous function) [as .js] (/home/saml/code/src/github.com/saml/babel-you-cray/node_modules/babel-register/lib/node.js:154:7)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Module.require (module.js:353:17)
    at require (internal/module.js:12:17)
    at Object.<anonymous> (/home/saml/code/src/github.com/saml/babel-you-cray/src/Context.js:1:1)
    at Module._compile (module.js:409:26)
    at loader (/home/saml/code/src/github.com/saml/babel-you-cray/node_modules/babel-register/lib/node.js:144:5)
    at Object.require.extensions.(anonymous function) [as .js] (/home/saml/code/src/github.com/saml/babel-you-cray/node_modules/babel-register/lib/node.js:154:7)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Module.require (module.js:353:17)
    at require (internal/module.js:12:17)
    at Object.<anonymous> (/home/saml/code/src/github.com/saml/babel-you-cray/src/App.js:1:1)
    at Module._compile (module.js:409:26)
    at loader (/home/saml/code/src/github.com/saml/babel-you-cray/node_modules/babel-register/lib/node.js:144:5)
    at Object.require.extensions.(anonymous function) [as .js] (/home/saml/code/src/github.com/saml/babel-you-cray/node_modules/babel-register/lib/node.js:154:7)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Module.require (module.js:353:17)
    at require (internal/module.js:12:17)
    at Object.<anonymous> (/home/saml/code/src/github.com/saml/babel-you-cray/test/index.js:1:1)
    at Module._compile (module.js:409:26)
    at loader (/home/saml/code/src/github.com/saml/babel-you-cray/node_modules/babel-register/lib/node.js:144:5)
    at Object.require.extensions.(anonymous function) [as .js] (/home/saml/code/src/github.com/saml/babel-you-cray/node_modules/babel-register/lib/node.js:154:7)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Module.require (module.js:353:17)
    at require (internal/module.js:12:17)
    at /home/saml/code/src/github.com/saml/babel-you-cray/node_modules/mocha/lib/mocha.js:230:27
    at Array.forEach (native)
    at Mocha.loadFiles (/home/saml/code/src/github.com/saml/babel-you-cray/node_modules/mocha/lib/mocha.js:227:14)
    at Mocha.run (/home/saml/code/src/github.com/saml/babel-you-cray/node_modules/mocha/lib/mocha.js:495:10)
    at Object.<anonymous> (/home/saml/code/src/github.com/saml/babel-you-cray/node_modules/mocha/bin/_mocha:460:18)
    at Module._compile (module.js:409:26)
    at Object.Module._extensions..js (module.js:416:10)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Function.Module.runMain (module.js:441:10)
    at startup (node.js:139:18)
    at node.js:990:3

```
