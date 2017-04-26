const defaultInstance = require('./Factory').defaultInstance;

class Context {
	static f() {
		return defaultInstance;
	}
}

module.exports = {
	default: Context,
};

