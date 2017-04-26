.PHONY: build
build: src/*.js
	babel src/ --out-dir dist/
clean:
	rm -rf dist/
