
```
$ node --version
v7.4.0
```

There is a problem with `lib/App.js`:
```
$ node lib/Factory.js 
$ node lib/Context.js 
$ node lib/index.js 
$ node lib/App.js 
/home/saml/code/src/github.com/saml/babel-you-cray/lib/Factory.js:5
		return new App();
		       ^

TypeError: App is not a constructor
    at Function.create (/home/saml/code/src/github.com/saml/babel-you-cray/lib/Factory.js:5:10)
    at Object.<anonymous> (/home/saml/code/src/github.com/saml/babel-you-cray/lib/Factory.js:11:27)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/home/saml/code/src/github.com/saml/babel-you-cray/lib/Context.js:1:87)
```

Same problem with `dist/App.js`:
```
$ npm install
$ ./node_modules/.bin/babel lib/ --our-dir dist/
$ node dist/Factory.js 
$ node dist/Context.js 
$ node dist/index.js 
$ node dist/App.js 
/home/saml/code/src/github.com/saml/babel-you-cray/dist/Factory.js:17
			return new App();
			       ^

TypeError: App is not a constructor
    at Function.create (/home/saml/code/src/github.com/saml/babel-you-cray/dist/Factory.js:17:11)
    at Object.<anonymous> (/home/saml/code/src/github.com/saml/babel-you-cray/dist/Factory.js:26:27)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/home/saml/code/src/github.com/saml/babel-you-cray/dist/Context.js:7:23)
```
