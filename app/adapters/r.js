import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
	host: 'http://www.reddit.com',
	urlForQuery (query, modelName){
		return `${this.host}/${modelName}/${query}.json`
	}
});
