const Context = require('./Context').default;
const App = require('./App').default;
const Factory = require('./Factory').default;
const defaultInstance = require('./Factory').defaultInstance;

module.exports = {
	default: Factory,
	App,
	Context,
	defaultInstance,
};

