.PHONY: all build run test
all: build
run: run.js
	node run.js
build: dist src/*.js
	babel src/ --out-dir dist/
dist:
	mkdir -p $@
test:
	mocha --compilers js:babel-register test/index.js
clean:
	rm -rf dist/
