import App from './App';

export default class Factory {
	static create() {
		return new App();
	}
}

export const defaultInstance = Factory.create();

