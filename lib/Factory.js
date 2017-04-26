const App = require('./App').default;

class Factory {
	static create() {
		return new App();
	}
}

module.exports = {
	default: Factory,
	defaultInstance: Factory.create(),
};

